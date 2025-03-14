FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the JAR file from the target directory (ensure your build process places the JAR there)
COPY target/*.jar app.jar

# Expose the application's port
EXPOSE 8081

# Set the entrypoint to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
