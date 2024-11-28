# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file into the container
COPY myapp-1.0-SNAPSHOT.jar Church_Father_Archive.jar

# Copy the `classes` folder into the container
COPY classes /app/classes

# Expose the port the application runs on
EXPOSE 5000

# Command to run the application
ENTRYPOINT ["java", "-jar", "Church_Father_Archive.jar"]
