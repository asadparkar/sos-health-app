# sos-health-app
## How to run on your system locally?

1) Download the repository locally
```
git clone https://github.com/asadparkar/sos-health-app.git
```

2) Browse into the client directory manually or in terminal
```
cd sos-health-app/client
```

3) Install all dependencies
```
npm install .
```

4) Run the website
```
npm run dev
```

## Objective
The primary objective of an emergency website is to provide users with a quick and easy way to request an ambulance in case of a medical emergency. Time is of the essence in medical emergencies, and every second counts when it comes to saving lives. Therefore, the website must be designed to be user-friendly and efficient in collecting the necessary information to dispatch the ambulance.Ultimately, the objective of an emergency website designed to call an ambulance is to potentially save lives by reducing the time required for emergency services to respond to a medical emergency. By providing users with a quick and easy way to request an ambulance and collecting the necessary information efficiently, an emergency website could help emergency responders arrive at the scene of a medical emergency more quickly and potentially save lives.

## Methodology
The website is designed to call an ambulance to provide users with a simple and efficient way to request emergency medical services during a medical emergency. The website focuses primarily on the core functionality of calling an ambulance, collecting the necessary information, and dispatching the ambulance as quickly as possible.

![Screenshot 2023-04-15 084432](https://user-images.githubusercontent.com/113037145/232282712-e1c3dcaa-7d09-4471-beae-78a870f25123.png)

Our emergency website provides a quick and easy way for users to request an ambulance during a medical emergency. To make the process as efficient as possible, we ask the user for their phone number and the reason for the ambulance request. Our website also automatically retrieves the user's location, ensuring that emergency services can be dispatched to the correct location without delay.

![Screenshot 2023-04-15 084459](https://user-images.githubusercontent.com/113037145/232282801-9b98d758-75b2-4765-9e8f-528255c97561.png)

As soon as the user sends an SOS request, nearby registered hospitals are immediately notified of the emergency and provided with the user's location. Hospitals can then accept the request and dispatch an ambulance to the scene as quickly as possible.

![Screenshot 2023-04-15 123520](https://user-images.githubusercontent.com/113037145/232282831-826a65da-35e6-4055-95cc-ccd1bfd5e35b.png)

To keep the user informed of the ambulance's progress, we provide a real-time map that tracks the ambulance's location and displays an estimated time of arrival. Additionally, our website provides the user with helpful tips and emergency procedures that they can follow while waiting for the ambulance to arrive. These tips may include basic first aid procedures, such as how to control bleeding or perform CPR, that can make a critical difference in emergency situations.

In addition to the emergency ambulance service, our website features a comprehensive general services page that is designed to provide additional support to users during an emergency. The general services page includes two key sections - an emergency procedures page and a chatbot feature.

![Screenshot 2023-04-15 122546](https://user-images.githubusercontent.com/113037145/232282907-64f49c6e-ed2d-4b19-a048-765d37e74165.png)

The emergency procedures page includes detailed guidance on how to treat common injuries in case of an emergency. This feature enables users to quickly access relevant and potentially life-saving information, providing them with the knowledge and confidence to take appropriate action in an emergency.

![Screenshot 2023-04-15 122606](https://user-images.githubusercontent.com/113037145/232282956-22256200-4079-4ba0-9709-db612beb4fab.png)


The chatbot feature is designed to provide users with additional support and guidance. It is a powerful tool that can help users identify their illness and provide suggestions to improve their health. By using the chatbot feature, users can access a range of information and resources that can help them manage their health and wellbeing more effectively.

![Screenshot 2023-04-15 122711](https://user-images.githubusercontent.com/113037145/232282991-d3d46f5b-965d-46fb-af64-999da79e9c6d.png)

In our website, we utilized Google Cloud virtual machines to provide a reliable and scalable platform for our users. Specifically, we used virtual machines to host our backend servers, which handle user requests and coordinate ambulance dispatches.

By using virtual machines, we were able to ensure that our servers had access to the resources they needed to handle a large number of simultaneous user requests. Additionally, we were able to easily scale up or down our server capacity as needed, allowing us to adjust to changes in traffic and demand.

![Screenshot 2023-04-16 140614](https://cdn.discordapp.com/attachments/1096705600710262846/1097174364211908618/image.png)

Overall, the inclusion of the general services page on our website provides users with a range of helpful and potentially life-saving resources. Whether they need emergency procedures guidance or help with managing their health and wellbeing, our website is a comprehensive and user-friendly platform that provides all the support that users need in an emergency.

We utilized Firebase as a backend service to handle data storage, user authentication, and real-time messaging.

![WhatsApp Image 2023-04-16 at 20 30 49](https://user-images.githubusercontent.com/113037145/232321873-25c15684-9f39-44ff-b9c9-8a9c9d48cb98.jpeg)

![WhatsApp Image 2023-04-16 at 20 30 50](https://user-images.githubusercontent.com/113037145/232321875-cc5cfd4c-4e19-45b9-bca2-c72e553a55cc.jpeg)



One of the key benefits of Firebase is its real-time database, which allowed us to provide a seamless user experience for our users. This feature enabled us to display real-time updates and notifications to users as ambulance requests were received and processed.

#### Hospital Side

![Screenshot 2023-04-15 084543](https://user-images.githubusercontent.com/113037145/232286811-10cb0bac-02a5-4be6-bc02-3238c1ed6b77.png)

![Screenshot 2023-04-15 141238](https://user-images.githubusercontent.com/113037145/232286882-673ee180-3f6b-47b8-9d2b-a5bac5305bcb.png)


![Screenshot 2023-04-16 140614](https://user-images.githubusercontent.com/113037145/232286930-7763d2b5-e91b-407e-a13b-35eea1a59f56.png)

https://user-images.githubusercontent.com/113037145/232311802-5a7920c1-c48c-4151-9659-98b9f7419d66.mp4

## Tech Stack
### Frontend

 • React.js
 
 • Tailwind CSS
 
 • Chakra UI
 
 • Axios
 
 • Redux

### Backend

 • Firebase
 
 ## Future Scope
Our emergency website is committed to continuous improvement, and we have several plans to enhance the functionality and user experience of the platform in the future.

Firstly, we plan to incorporate multiple ambulances into the system. This will ensure that emergency services can be dispatched to the user's location as quickly as possible, even during periods of high demand. By increasing the number of ambulances available, we can reduce response times and improve outcomes in emergency situations.

Secondly, we plan to improve the map functionality of the website. This will include adding more detailed maps and integrating them with real-time traffic data to provide more accurate estimates of ambulance arrival times. Additionally, we plan to add features such as alternative routes, which will help ambulance drivers navigate around traffic congestion and other obstacles.

Thirdly, we plan to improve the latency of the website. This will involve optimizing the website's backend systems and infrastructure to ensure that requests are processed as quickly as possible. We will also work on improving our data transfer protocols to minimize latency and ensure that emergency services are dispatched to the correct location as quickly as possible.

Finally, we will be focusing on improving the backend of the website to improve scalability and support multiple users. This will involve implementing a more efficient database management system, optimizing server configurations, and improving the overall architecture of the website to ensure that it can handle a high volume of requests without crashing or slowing down.

Overall, our future plans for the emergency website are aimed at providing users with a fast, reliable, and effective way to request emergency medical services. By incorporating multiple ambulances, improving the map functionality, reducing latency, and improving the website's backend, we aim to make the emergency website the go-to platform for anyone in need of emergency medical services.


## Results
The implementation of the SOS website has been a success, providing a comprehensive emergency ambulance service with just a click of a button. The website's fully-fledged functionality includes an automatic location retrieval feature, enabling emergency responders to quickly locate and dispatch services to the user's location.

In addition to the emergency ambulance service, the website also includes a general services page that provides a range of emergency procedures, allowing users to access helpful tips and guidance while they await assistance. Furthermore, the website includes a chatbot feature that can be used to identify the user's illness, providing an additional layer of support and enabling emergency responders to be better prepared to respond to the user's needs.

Overall, the successful implementation of the SOS website has created a comprehensive and user-friendly platform that provides a range of emergency services, including ambulance dispatch and tracking, general emergency procedures, and chatbot support.



