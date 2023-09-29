---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

## <a href="https://github.com/rezmansouri/YOHO" target="_blank">YOHO (You Only Hear Once)</a>
### Aug. 2022 - Oct. 2022 

<sub>Technologies used: Python, TensorFlow, Keras</sub>

With YOHO, a visually impaired person would be able to take out their smartphone, put in their earbuds, and take a walk in the street while their phone lets them know about their surroundings.

<p align="center">
  <img src="/images/yoho1.png" width="700em" height="auto">
</p>

This project consists of two main parts: first, transfer learning on a pre-trained YOLOv2 model on the <a href="https://bdd100k.com" target="_blank">Berkeley Deep Drive</a> dataset and fine-tuning the last two layers, and second, placing an inference engine - _Tell a Vision_ - on top of the model to get audible output from its predictions.

<p align="center">
  <img src="/images/yoho2.png" width="700em" height="auto">
</p>
<p align="center">
<i>YOHO's architecture</i>
</p>

<hr/>

## <a href="https://github.com/rezmansouri/tell_a_vision" target="_blank">Tell a Vision</a>
### Aug. 2022 - Sep. 2022

<sub>Technologies used: Python, NumPy, Google Text to Speech</sub>

Tell a Vision (`tv`) is an inference engine, in the form of a Python package that describes the scenes for object detection tasks in computer vision. `tv` can provide explanatory analysis on the output of object detection algorithms. It takes bounding boxes, and the classes of the objects found and answers questions such as:

- How many objects and of what kind are in a specific region of the scene?
- How far are they? Are they close?
- Are they small or medium-sized?

- ...

And in the end, using TTS (Text To Speech) it can describe the scene.

<p align="center">
  <img src="https://raw.githubusercontent.com/rezmansouri/tell_a_vision/main/misc/tv.gif" width="600em"/>
</p>

<hr/>

## <a href="https://github.com/rezmansouri/deepray" target="_blank">DeepRay</a>
### Sep. 2022 - Oct. 2022

<sub>Technologies used: Python, Pytorch, Scikit Image</sub>

DeepRay is able to detect infected areas in patients' chest X-ray images to help in COVID-19 diagnosis. The project's main part was to train a U-Net model on the <a href="http://qatacov.live/" target="_blank">QaTa-COV19</a> dataset.

<p align="center">
  <img src="/images/deepray.png" width="700em" height="auto">
</p>

<hr/>

## <a href="https://github.com/rezmansouri/SharpEye" target="_blank">SharpEye</a>
### Jun. 2022

<sub>Technologies used: MATLAB</sub>

SharpEye is a collection of MATLAB functions for the logistic regression algorithm and its application has been implemented for binary image classification. This project trains a logistic regression model as an example, to predict if the person in a picture is wearing a mask or not.

<p align="center">
  <img src="/images/sharpeye.png" width="600em" height="auto">
</p>

<hr/>

## <a href="https://github.com/rezmansouri/gitgat" target="_blank">GitGat</a>
### Jun. 2022

<sub>Technologies used: Python, beautifulSoup</sub>

GitGat is a Telegram bot that can send GitHub repositories or subdirectories in them to the user as `.zip`. Imagine a 20 Gb repository that you only need a 50 Mb directory in that repository. Instead of cloning the whole repository, with GitGat you can download just the desired directory. Saves data and time!

<p align="center">
  <img src="/images/gitgat.png" width="250em" height="auto">
</p>


<hr/>

## <a href="https://github.com/rezmansouri/microlab" target="_blank">MicroLab</a>
### Oct. 2021 - Nov. 2021

<sub>Technologies used: C, C++, Proteus Professional, ATMega16, Arduino</sub>

MicroLab is a collection of embedded systems' programs. The programs are written for Atmel's ATMega microcontroller.
The following concepts are covered in the programs:

- LCD interfacing
- Temprature sensor interfacing using ADC
- Stepper motor interfacing
- Serial communication through USART
- Timers: 0, 1 and 2 and their interrupts
- External crystal oscillators
- 7 Segment interfacing
- External interrupts

<p align="center">
  <img src="/images/microlab.gif" width="800em"/>
</p>

<hr/>

## <a href="https://github.com/rezmansouri/RobotAndBattery" target="_blank">Robot and Battery</a>
### Feb. 2021

<sub>Technologies used: Java, Swing</sub>

An implementation of the classic A* search algorithm, as a part of my _Artificial Intelligence and Expert Systems_ course's final project in Kharazmi.

<p align="center">
  <img src="https://raw.githubusercontent.com/rezmansouri/RobotAndBattery/main/robotAndBattery.gif" width="360em" height="auto">
</p>

<hr/>

## <a href="https://github.com/rezmansouri/SynTAXI" target="_blank">SynTAXI</a>
### Feb. 2021

<sub>Technologies used: Java</sub>

SynTAXI is a syntax analyzer for programming languages. It takes the grammar rules of a language, and a program as input and checks for syntax errors. Here's an example of what it can detect:
```c
int main() {
    int = 10;
}
Exception in thread "main" SynTAXI.TaxiException: Syntax Error: Expected Identifier At row: 2 Column: 9
```

SynTAXI was implemented as a part of my _Compiler Design Principles_ course's final project in Kharazmi.
<hr/>

## <a href="https://github.com/rezmansouri/CoffeeLEX" target="_blank">CoffeeLEX</a>
### Jan. 2021

<sub>Technologies used: Java</sub>

CoffeeLEX is a lexical analyzer for programming languages. It takes the Lexical Rules of a language and a program as input and checks for lexical errors.

The output of CoffeeLEX is a linked list of the tokens of the program.
Here is what it would look like with the given example in SynTAXI's decription, _if it was correct!_
```c
Value  Type               Row  Column  
-----  ----               ---  -----   
int    Int Keyword        1    1       
main   Main Keyword       1    5       
(      Parentheses Open   1    9       
)      Parentheses Close  1    10      
{      Accolade Open      1    11      
int    Int Keyword        2    5       
x      Identifier         2    9       
=      Assignment         2    11      
10     Number             2    13      
;      Semicolon          2    14      
}      Accolade Close     3    0       
_________________________________
```
CoffeeLEX was implemented as a part of my _Compiler Design Principles_ course's final project in Kharazmi.

<hr/>

## <a href="https://github.com/rezmansouri/LoseRAR" target="_blank">LoseRAR</a>
### Feb. 2020

<sub>Technologies used: Java</sub>

LoseRAR (*WinRAR's competition*) is an implementation of the Huffman coding compression algorithm. It was developed as my _Data Structures and Algorithms_ course's final project in Kharazmi.