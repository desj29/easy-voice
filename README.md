# Easy Voice

## Description

Welcome to the repository of Easy Voice, a React.js-based web platform. Easy Voice is dedicated to providing top-notch VOIP support and services. Our website serves as an informational hub and a storefront for our clients, offering a seamless user experience and detailed insight into our offerings.

## Features

- **Informative Content**: Detailed information about VOIP services and support.
- **Storefront**: A user-friendly interface to browse and purchase VOIP-related products.
- **Responsive Design**: Fully responsive on various devices and screen sizes.
- **User Account Management**: Secure login and account management features.

# Building and Running Your React App with Docker

This guide will walk you through the process of building a Docker image for your React application and running it locally for testing.

## Prerequisites

- Make sure you have Docker installed on your system. You can download it from [Docker's official website](https://www.docker.com/get-started).

## Building the Docker Image

1. **Open a Terminal**: Open a terminal and navigate to the root directory of your React project where the Dockerfile is located.

2. **Build the Image**: Run the following command to build your Docker image. Replace `your-image-name` with a name of your choice for the Docker image.

    ```bash
    docker build -t your-image-name .
    ```

   This command reads the Dockerfile in the current directory and builds a Docker image named `your-image-name`.

## Running the Docker Image

Once the image is built, you can run it locally to test if the application is running as expected.

1. **Run the Container**: Execute the following command to start a container from your image. This command will map port 3000 on your host machine to port 80 in the container, where the React app is being served.

    ```bash
    docker run -p 3000:80 your-image-name
    ```

2. **Accessing the App**: Open your web browser and go to [http://localhost:3000](http://localhost:3000). You should see your React application running.

## Stopping the Container

To stop the running container:

1. **Find the Container ID**: First, you need to find the container ID with:

    ```bash
    docker ps
    ```

2. **Stop the Container**: Use the following command to stop the container:

    ```bash
    docker stop [CONTAINER_ID]
    ```

   Replace `[CONTAINER_ID]` with the actual ID of your container.