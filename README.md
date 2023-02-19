# Project Story


# We are GlovEMR, an intuitive, adaptive, and provider-centric EMR.

### We focus on reducing the burden of EMRs on providers while increasing quality through ethical A.I. models. Read on to see our story!

## Inspiration

Our project was motivated by most of the team’s experience as part of the healthcare team whether in hospitals, clinics or in the community. One of the major inspirations was when one of the project team members tagged along with a community health worker in Austin. 

The community health worker works with people who are experiencing homelessness and in such an environment in the field, there is only very limited time to speak with individuals, provide resources and document all of this in to electronic medical records (EMRs), which are electronic systems that store and document the patient’s healthcare journey. 

What this team member learned was that these systems are convoluted and as a result, providers spend less time with patients or clients and often feel frustrated by how convoluted some of these systems were. Other team members noted a similar experience in their time working in hospitals or in clinics as well as by speaking with several practicing physicians. 

After doing some research into the issue, we learned that providers spend over *50 percent* of their workday on screens with EMRs rather than interacting with patients (Honavar). EMR work burdens are a factor in provider burnout, largely due to reduced time with patients to file EMRs. EMRs also don’t fulfill their potential being an electronic system as their data presentation effectively mirrors paper documents. A provider needs 15 clicks to provide a prescription (Honavar). Additionally, EMRs often are unable to solve the issues regarding the lack of context behind medical decisions because of their ineffective data presentation.

The medical industry often lags behind in terms of process and data management — EMRs were only implemented around 2004 and the process to switch from paper records to EMRs has been slow. 

Inspired by the functional checklist from commercial aviation, we decided to take a similar approach to medical data visualization and management. In our case, we found that designing a minimally-invasive digital framework for optimizing EMR efficiency is a quick, implementable solution to increased EMR burden with increased patient load. 

A big part of the issue is converting data into usable knowledge. A major obstacle to quality medical decisions and time-saving is making sense of the tons of data points provided by sophisticated labs and even patient diligence.  We wanted to build a system that makes it easier to look at the bigger picture of individual data points through visualization.

## What it does

As physician workload increases due to demand, we want to ensure that quality is kept at a high standard while burnout is minimal. Our project centers on using AI to reduce the amount of time and effort providers spend on the screen while *facilitating decision-making*. The software will tailor to individual users to provide clinically logical data with fewer clicks and scrolling. 

Most EMRs are built for everyone yet no one in particular, our program aims to help EMRs fit like a glove. Specifically, the program would use a set of filters to create a “suggested” section of values. These would be determined by the physician’s specialty or focus, comorbidities, and values deviating from the norm. Each one of these multipliers would increase the chance of a specific marker’s likelihood of appearing in the priority section. For example, an endocrinologist with a diabetic patient would see glucose values in their suggested section of values while a cardiologist focusing on hypertension would be suggested sodium and blood pressure values.

Our product is geared toward all providers that utilize any EMR platform. As stated above, the adaptability of the A.I. would fit any specialty through usage. The beauty of the product is its ability to layer over the existing, familiar EMR system without disturbance. The provider can manually edit this section to their liking. The design introduces **minimal interference** to the existing interface so there is no learning curve. 

## How we built it

In the initial design phase of the project, we consulted with practicing physicians such as Dr. Paul Tang MD and Dr. Steve Steffensen MD to understand what problems exist in the space and what the interface should feel like. 

After sketching the idea on paper and making a prototype in Figma, we began working on the front-end web user interface for a portion of the EMR. 

We decided to use React.js for the front end as it provided the platform to dynamically load data into the website and communicate with our backend. Tailwind CSS allowed to streamline the interface and make it visually appealing relatively quickly. 

The backend was developed in Python and to do this we spent time with specific use cases to understand how the platform would behave in particular situations. As a result of these discussions, we decided that the algorithm would need to consider factors such as the patient’s current or previous diagnoses, the type of physician as well as the lab values themselves and if they are within the typical reference ranges. However, all of these factors would come secondary to the values that are selected by the physician across many other similar patients and contexts. The physician’s choices are prioritized to maintain integrity towards human-forward clinical care and prevent errors that AI potentially presents. 

## Challenges we ran into

From the idea conception phase, we ran into several challenges with truly understanding the role that our product would play into. While we initially thought we could leverage a large language model to help write notes and so on, we learned that many physicians have their own system for writing their notes and that an AI by itself would not address the root issue when it comes to daily use of EMRs. While we then thought about AI as a clinical decision-making tool, there were particular ethical problems surrounding AI in this role such as consequences of listening to or ignoring an AI decision that ultimately leads to harm. 

Once we settled on the approach of utilizing AI in a way to help clinical decision-making, another issue was deciding if and how our product would integrate with the various EMR systems currently in use. Each of these EMR systems are slightly different from each other and some are closed source making it hard to integrate outside code. Therefore, we decided to simulate our own EMR to demonstrate how our product would work as it would have to be integrated into the EMR itself for data privacy reasons. 

There were also technical problems with integrating the front-end with the back-end given the time constraints. Since the back end would provide relevant lab values in a ranked order based on the algorithm’s prediction, there was a challenge in how the two sides would communicate as the front end was built in Javascript while the back end was built in Python. Ultimately we decided to use JSON as the intermediary data format that could be read by both platforms. 

Another challenge with the user interface was to create an intuitive and visually appealing design that can feel like an EMR that providers already use. Since we wanted our product to integrate into existing workflows our interface was heavily inspired by the Epic EMR platform which is a widely used EMR system across the country. Our design was built on the idea that we want providers to want to enjoy EMRs and to do that we would need to make them intuitive and easy on the eyes. 

## Accomplishments that we're proud of

- Building a solution that *enhances existing EMR systems* rather than something completely new
- Combining first-hand healthcare work experiences with human-centered design principles to build a strong solution

## What we learned

- High-quality human-centered design and optimizing ease-of-use is crucial for designing interfaces that humans use on a daily basis
- Ethical concerns must be considered to build a protected system to store confidential patient information and maintain provider autonomy
- Questioning the typical Silicon Valley approach of breaking things and moving quickly so that instead we are considerate of what our product intends to do and of the potential direct or indirect consequences of our product

## What's next for GlovEMR

The fundamental technology behind GlovEMR can be expanded in our mission to convert data into knowledge. Our next steps with GlovEMR would be to leverage AI to use medical data to create insightful data visualizations that allow clinicians to understand the broader story of a patient. These visualizations can include comparing lab values across time to find trends over time but also to compare to associated lab values such as values that may trend downwards as another rises. 

Although data-driven storytelling in health is the goal of GlovEMR, the ultimate goal is to develop an AI system that can dynamically change the user interface to best fit the needs of users in a way that is not disruptive and informed by user actions. 

Ultimately, healthcare is about the patient’s story — we want technology to help tell that story. With data visualization and data-driven storytelling, we can better help providers to solve their issues. With that in mind, we envision **three major steps** for our product:

1. Data visualization: As our A.I. model improves, we hope to restructure the way data is presented on the screen to fully take advantage of the potential of EMRs. Effective data visualization removes the clutter of an unorganized pit of information and funnels it through a mold to what would best facilitate the task of the user. In our scenario, instead of massive tables and datasets, GlovEMR would present the information in the form of a line graph over time or a scatterplot depending on how the provider interacts with the data. 
2. Data-driven storytelling and prediction: With refinement, this would entail predicting and preloading the next moves of the user. This is generalizable to all technological interfaces and is already being implemented in the most frequently used interfaces, such as our smartphones.
3. A.I. adaptable interface: Ultimately, our A.I. system hopes to reach a point of being able to seamlessly change the user interface in real time. The A.I. would learn the usage style of the user and the interface itself would adapt to best support the user.  A.I. in this case would have strike a balance of not completely altering the interface to point of confusion but to make the interface something that is familiar but ever so slightly improved over time. We aim to have A.I. make interfaces more delightful to utilize, allowing on users to focus on what matters most to them, not unpleasant user interfaces.

## Ethics

Our project is based on the belief that new technology should be ethically used to improve the efficacy of healthcare. We understand that providers take pride in their skills and clinical decision-making. Artificial intelligence is also a frontrunner for ethical concerns in terms of transparency, data collection, and accountability (Kavanagh 3). In the field of healthcare especially, HIPAA and protected health information (PHI) are crucial for consideration when implementing a project on electronic medical records. We factored these concerns into our project and vision for its future. 

An ethical concern with our current project is the burden it may cause providers when using it. In the future, these concerns could develop to include over-dependency on A.I. suggestions as our project becomes more involved in data representation and visualization. Specifically, our stakeholders consisting of providers and healthcare administrators may be concerned with these issues. For example, malpractice by providers could harm patients and cause significant concerns for healthcare administration. 

To address these concerns, we built our project around minimal interference for the provider first. Our job is to enhance the work of professionals and not to take over in any aspect. Therefore, we provide a closable menu with only data that does not provide any recommendations or burdens to the provider. Our word choice of “suggested” as opposed to “recommended” further highlights our ethical priority of minimal interference. We also include an explanation of our data selection algorithm and its purpose for transparency.

With regard to future ethical concerns, much testing is needed to refine the A.I. algorithm that is used to create priority data and effective, yet safe visualizations. However, here are some of our ethical concerns and solutions for the future of this project:

1. Underrepresentation: In terms of underrepresented groups, our project may not be readily available due to the need for a costly EMR system. However, there should be no negative impact on underrepresented groups. Moreover, we see a future in which our program can offset the cost concerns associated with EMRs by decreasing the bottleneck of provider usage while increasing the quality and efficacy of care.
2. Harmful, negative data visualization is a concern with A.I. suggestions. We see our program covering EMR data representation comprehensively. However, this may result in data suggestions that are counterintuitive and result in workload burdens or harmful decisions in conjunction with over-dependence on the suggestions. For example, a graph of two markers that have no causation with each other may not give the provider what they want. In fact, Therefore in future testing, it is crucial that we continue to lean towards minimal interference and transparency. 
3. Alert Fatigue: Regarding our suggestion system, we predict that providers may be desensitized to the constant appearance of our suggestions format. This is because currently, our implementation may resemble a pop-up banner. Alert fatigue is especially common following a heavy volume of alerts on EMRs over time. As we would be constantly working to improve GlovEMR, we envision steady updates with minor, unobtrusive visual changes will prevent this. Additionally, our product should not be delivering pop-ups or notifications in any way that would cause typical alert fatigue. 
4. Data collection and HIPAA: Being that EMR systems store protected health information, our product presents ethical concerns with data collection. However, our program would operate within HIPAA guidelines because there would be no patient information being disclosed. Rather, we would strive to improve our model strictly on provider feedback, which is our target audience. In the case that we would need patient data for further development, this would be done ethically through an Institutional Review Board (IRB) approved study that qualifies for limited use of PHI (CDC).
5. Trust: We understand that our product may cause providers to lose trust through unhelpful suggestions and future data storytelling. We want the A.I. to be as transparent as possible to users about how it comes up with suggestions. This is why our solution includes a “Why these suggestions?” button that shares details on what data the A.I. uses to come up with suggestions. If suggestions are not accurate, UI gives the option for users to quickly delete or add data rows, and A.I. will learn from this. 

## Bibliography

1. Kavanagh C. *Artificial Intelligence*. Carnegie Endowment for International Peace; 2019:13-23. Accessed February 18, 2023. [https://www.jstor.org/stable/resrep20978.5](https://www.jstor.org/stable/resrep20978.5)
2. Honavar SG. Electronic medical records – The good, the bad and the ugly. *Indian J Ophthalmol*. 2020;68(3):417-418. doi:[10.4103/ijo.IJO_278_20](https://doi.org/10.4103/ijo.IJO_278_20)
3. Health Insurance Portability and Accountability Act of 1996 (HIPAA) | CDC. Published June 28, 2022. Accessed February 19, 2023. [https://www.cdc.gov/phlp/publications/topic/hipaa.html](https://www.cdc.gov/phlp/publications/topic/hipaa.html)
