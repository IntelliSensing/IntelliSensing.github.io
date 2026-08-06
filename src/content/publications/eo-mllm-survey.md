---
title: "A Survey on Earth Observation Multimodal Large Language Models: Framework, Core Technologies, and Future Perspectives"
description: "A comprehensive survey of Earth observation multimodal large language models, covering architectures, training strategies, benchmark tasks, and future research directions."
pubDate: 2026-02-01
venue: "Journal of Radars"
authors:
  - "Wenjia Xu"
  - "Ruiqing Yu"
  - "Minghao Xue"
  - "Xueyi Wang"
  - "Yuanben Zhang"
  - "Zhiwei Wei"
  - "Zhe Zhang"
  - "Mugen Peng"
  - "Yirong Wu"
tags:
  - "Remote Sensing Multimodal Large Language Models"
  - "Earth Observation"
  - "Survey"
researchAreas:
  - "vision-language"
  - "remote-sensing"
image: /assets/pub/eo-mllm-survey.jpg
paperUrl: "https://radars.ac.cn/en/article/doi/10.12000/JR25088"
links:
  - label: "中文版"
    url: "https://radars.ac.cn/cn/article/doi/10.12000/JR25088"
  - label: "DOI"
    url: "https://doi.org/10.12000/JR25088"
draft: false
---

# 多模态对地观测大模型：架构、关键技术和未来展望

*Journal of Radars*, 2026, 15(1): 361–386. DOI: 10.12000/JR25088

Multimodal Large Language Models (MLLMs) have advanced rapidly, and Earth observation is one of the domains where that progress is most visible. By building bridging mechanisms between large language models and vision models and training the two jointly, Earth observation MLLMs (EO-MLLMs) deeply integrate optical imagery, Synthetic Aperture Radar (SAR) imagery, and text. The result is a paradigm shift in intelligent Earth observation interpretation — from shallow semantic matching toward higher-level understanding grounded in world knowledge.

This survey reviews that shift systematically.

## What the survey covers

- **Concept and development.** How EO-MLLMs emerged and how the field progressed, traced from RSGPT and GeoChat through EarthGPT, RSUniVLM, EarthDial, and GeoGround.
- **Architecture.** The bridging mechanisms that connect vision encoders to language models, and the design choices each one implies.
- **Training methodology.** Joint training strategies, instruction tuning, and fine-tuning approaches suited to remote sensing data.
- **Applications.** How these models are applied across practical remote sensing interpretation tasks.
- **Benchmarks and datasets.** The evaluation resources the field relies on, and what they do and do not measure.
- **Earth observation agents.** EO-Agents, which extend MLLMs from passive interpretation toward agentic, automated analysis workflows.
- **Outlook.** Open problems and the research directions the authors see as most promising.

The figure above traces the development of EO-MLLMs and EO-Agents from 2023 onward, marking where each representative model appeared.
