---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Papers in Refereed Conferences<br>

### <a href="https://ieeexplore.ieee.org/abstract/document/11416419" target="_blank">[1] Autoregressive Surrogate Modeling of the Solar Wind with Spherical Fourier Neural Operator</a>
**Mansouri R.**, Kempton D. J., Riley P., and Angryk R. A., *IEEE International Conference on Data Mining Workshops (ICDMW), 2025*<sup> published</sup>

<!-- ABSTRACT START -->
We utilize the Spherical Fourier Neural Operator (SFNO) as a novel data-driven surrogate model for simulating the radial velocity of the solar wind on spherical shells. Unlike traditional models like HUX that rely on empirical acceleration terms, SFNO learns directly from data in the spectral domain on spherical geometries—enabling faster, scalable, and flexible forecasts.

In addition to the base model, we propose an autoregressive variation of SFNO: it predicts the solar wind velocity across 5 radial shells (channels) at a time and recursively uses the last predicted shell as input to forecast the next 5, continuing until all 139 radial shells are predicted. This approach allows the model to generate full 3D radial profiles with a compact architecture. The source code is publicly available at <a href="https://github.com/rezmansouri/solarwind-sfno-velocity">github.com/rezmansouri/solarwind-sfno-velocity</a>.
<!-- ABSTRACT END -->

<p align="center">
  <img src="https://github.com/rezmansouri/solarwind-sfno-velocity-autoregressive/raw/main/images/cr2293.gif" width="750em" height="auto">
</p>

<p align="center">
<i>Solar wind radial velocity modeling using our 5-radii and full-radii SFNO</i>
</p>

<hr/>

### <a href="https://ieeexplore.ieee.org/document/11471477" target="_blank">[2] Toward Data-Driven Surrogates of the Solar Wind with Spherical Fourier Neural Operator</a>
**Mansouri R.**, Kempton D. J., Riley P., and Angryk R. A., *International Conference on Machine Learning and Applications (ICMLA), 2025*<sup> published</sup>

<!-- ABSTRACT START -->
The project utilizes the Spherical Fourier Neural Operator (SFNO) as the first data-driven surrogate model for simulating the radial velocity of the solar wind.

Traditional numerical models like HUX rely on simplified assumptions that limit adaptability and real-time performance. SFNO learns directly from data in the spectral domain on spherical geometries, offering a flexible and efficient alternative that improves with more data and training. The source code is publicly available at <a href="https://github.com/rezmansouri/solarwind-sfno-velocity-autoregressive">github.com/rezmansouri/solarwind-sfno-velocity-autoregressive</a>.
<!-- ABSTRACT END -->


<p align="center">
  <img src="https://github.com/rezmansouri/solarwind-sfno-velocity/raw/main/images/cr2268.gif" width="750em" height="auto">
</p>

<p align="center">
<i>Solar wind radial velocity modeling using SFNO</i>
</p>

<hr/>

### <a href="https://ieeexplore.ieee.org/abstract/document/11417053" target="_blank">[3] Towards Multimodal Solar Flare Prediction Using Magnetic Polarity Inversion Lines</a>
Khani Z., **Mansouri R.**, and Aydin B., *IEEE International Conference on Cognitive Machine Intelligence (CogMI), 2025*<sup> published</sup>

<!-- ABSTRACT START -->
Solar flares are among the most critical space weather events, marked by sudden and intense bursts of solar radiation. Accurate and reliable forecasting of such events is essential due to their potential to disrupt both space-based and earth-based systems. In this study, we propose a machine learning approach that leverages a novel multimodal dataset centered on magnetic polarity inversion lines (MPILs) derived from SDO/HMI magnetograms. The dataset comprises two spatial raster-based modalities: maps of MPILs and magnetic polarity regions, as well as a multivariate time series capturing the physical and shape-based features of the MPILs. For modeling, we apply time series classifiers to the temporal modality and convolutional neural networks (CNNs) to the spatial modalities. Their outputs are integrated using a late fusion strategy via ensemble learning. Our method aims to predict ≥M1.0-class solar flares within a 24-hour window.Evaluation results show that the proposed multimodal model achieves a True Skill Statistic (TSS) of 0.48, Heidke Skill Score (HSS) of 0.36, and Composite Skill Score (CSS) of 0.42, outperforming the best unimodal baseline by up to 11% in CSS on the same dataset and demonstrating the value of integrating diverse modalities. The key contributions of this work include: (1) the development of a new MPIL-based multimodal dataset, (2) the adaptation of standard machine learning techniques to this context, and (3) empirical validation that multimodal integration enhances predictive performance. This work lays the groundwork for advancing solar flare forecasting through multimodal machine learning.
<!-- ABSTRACT END -->

<p align="center">
  <img src="/images/multimodal-1.png" width="750em" height="auto">
</p>

<p align="center">
<i>An illustration of dataset modalities for a series of active region patches (HARPNUM 377, NOAA AR 11158) between 2011-02-13T11:24:00 and 2011-02-13T23:12:00. (A) M1: a multivariate time series of 60 timesteps, each containing 18 distinct properties associated with PILs (four normalized properties are visualized). (B) M2: binary masks of polarity inversion lines (PILs) overlaid in purple on the corresponding HMI magnetogram. (C) M3: binary masks of the union of positive and negative magnetic regions. The rasters in subfigures (B) and (C) are taken at 2011-02-13T23:12:00. The magnetograms shown in the background of (B) and (C) are for visualization only; the actual inputs are the binary masks.</i>
</p>

<hr/>

### <a href="https://ieeexplore.ieee.org/document/11471397" target="_blank">[4] A Multimodal Machine Learning Approach for Solar Flare Prediction using Polarity Inversion Lines Data</a>
Khani Z., **Mansouri R.**, and Aydin B., *International Conference on Machine Learning and Applications (ICMLA), 2025*<sup> published</sup>

<!-- ABSTRACT START -->
Predicting solar flares is a central problem in space weather forecasting that has drawn increased research interest due to advances in data-driven learning models and novel datasets integrated from heterogeneous data sources. This paper marks a pioneering effort in leveraging a rich dataset of magnetic polarity inversion lines (MPILs) derived from the Solar Dynamics Observatory’s Helioseismic and Magnetic Imager (SDO/HMI). We utilize rasters of MPILs and the convex hull of MPILs as two distinct spatial modalities, along with a multivariate time series of physical and shape-based characteristics of MPILs. We introduce a new multimodal prediction model that aims to predict the occurrence of ≥M1.0 class flares within the next 24 hours. This model utilizes Long Short-Term Memory (LSTM) networks for the time series data and Convolutional Neural Networks (CNN) for the spatial data, extracting features from each modality in a self-supervised manner and combining them by employing a low-rank fusion method for the prediction task. We employ a chronological partitioning strategy to evaluate the predictive skill of our model, using the established True Skill Statistic (TSS) and Heidke Skill Score (HSS) metrics. Evaluation results show that the proposed multimodal model achieves a True Skill Statistic (TSS) of 0.44, Heidke Skill Score (HSS) of 0.30, outperforming unimodal baselines on the same dataset. The main contributions of this study include: (1) innovative multimodal data integration using magnetic polarity inversion lines from active regions, (2) effective implementation of a multimodal flare prediction model utilizing the MPIL dataset, and (3) empirical validation that multimodal integration enhances predictive performance. This work lays the groundwork for advancing solar flare forecasting through multimodal machine learning.
<!-- ABSTRACT END -->

<p align="center">
  <img src="/images/multimodal-2.png" width="750em" height="auto">
</p>

<p align="center">
<i>Uni/multimodal prediction results</i>
</p>


<hr/>

### <a href="https://journals.flvc.org/FLAIRS/article/view/138987" target="_blank">[5] Exploring Solar Granulation: from IMaX/SUNRISE to DKIST</a>
**Mansouri R.**, Angryk R., and Reardon K., *The International FLAIRS Conference Proceedings, 38(1)*<sup> published</sup>

Granules are small cellular structures that populate the solar photosphere and are formed by the dynamic behavior of convection cells. This constant motion generates an evolving pattern of diverse granule types and intergranular regions across the photosphere. Understanding this microscale phenomenon by accurately identifying and classifying the underlying structures is crucial to advance the knowledge of the fundamental physical processes driving solar dynamics. In this study, we leverage images from the IMaX instrument on the SUNRISE balloon-borne telescope, along with their corresponding ground truth masks, to conduct a comparative evaluation of various neural semantic segmentation models. Our best-performing methodology achieves an average mIoU of 0.41 and an average dice coefficient of 0.53 among the classes. Furthermore, we applied the best performing model to high-resolution images from the Daniel K. Inouye Solar Telescope (DKIST) telescope, generating preliminary annotations to facilitate future analysis, making this the first application of these techniques to data from DKIST. The source code is publicly available at <a href="http://github.com/rezmansouri/imax-to-dkist">github.com/rezmansouri/imax-to-dkist</a>.

<p align="center">
  <img src="/images/granules.gif" width="750em" height="auto">
</p>

<hr/>

### <a href="https://en.civilica.com/doc/1366047/" target="_blank">[6] A New Approach to Balanced Partitioning of Signed Networks</a>
Ehsani M., **Mansouri R.**, *14<sup>th</sup> International Conference of Iranian Operations Research Society (ICORS 2021)*<sup> published</sup>

This paper presents a new approach to partition an imbalanced signed network into two near-balanced sub-networks. We further supplemented the results of this work with additional investigations on some measures to evaluate signed links' properties in relevance to their position and role in the whole structure of a network.


<p align="center">
  <img src="/images/bridgecut.jpg" width="750em" height="auto">
</p>

<p align="center">
<i>Resulting partitioned structure of a real-world complex network by BridgeCut</i>
</p>

<hr/>


## Papers in Refereed Journals

### [1] Load Balancing in Cloud, Fog Computing and Convergence of Fog and Cloud - A Survey
Mirtaheri S. L., Azari Jafari M., Greco S., Arianian E., and **Mansouri R.**, *Journal of Information Systems and Telecommunication, 2025*<sup> published</sup>


<hr/>