from pathlib import Path

try:
    from flask import Flask, send_from_directory, send_file
except ImportError:  # pragma: no cover - optional dependency for local serving
    Flask = None
    send_from_directory = None
    send_file = None

BASE_DIR = Path(__file__).resolve().parent
FIGS_DIR = BASE_DIR / "figs"

def create_flask_app() -> "Flask":
    """Create a Flask application when the dependency is available."""

    app = Flask(
        __name__,
        static_url_path="/static",
        static_folder=str(BASE_DIR / "static"),
    )

    @app.route("/")
    def serve_index():
        """Serve the main landing page."""

        return send_file(BASE_DIR / "index.html")

    @app.route("/static/<path:path>")
    def serve_static(path: str):
        """Serve static assets such as CSS and JavaScript."""

        try:
            return app.send_static_file(path)
        except Exception as exc:  # pragma: no cover - logged for debugging clarity
            print(f"Error serving static asset {path}: {exc}")
            return f"Error: {exc}", 404

    @app.route("/figs/<path:filename>")
    def serve_figures(filename: str):
        """Expose figure PDFs/PNGs referenced by the landing page."""

        return send_from_directory(FIGS_DIR, filename)

    return app


def run_flask_app() -> None:
    """Run the Flask development server."""

    app = create_flask_app()
    app.run(host="0.0.0.0", port=5001, debug=True)


def run_builtin_server() -> None:
    """Fallback static file server using the Python standard library."""

    from http.server import HTTPServer, SimpleHTTPRequestHandler

    class RootedRequestHandler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    server = HTTPServer(("0.0.0.0", 5001), RootedRequestHandler)
    print("Flask is not installed; serving files via http.server on http://0.0.0.0:5000")
    try:
        server.serve_forever()
    except KeyboardInterrupt:  # pragma: no cover - manual shutdown
        print("\nShutting down server...")
    finally:
        server.server_close()


def main() -> None:
    if Flask is None:
        run_builtin_server()
    else:
        run_flask_app()


if __name__ == "__main__":
    main()
