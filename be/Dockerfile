# Dockerfile.be

# Stage 1: Build Stage
FROM maven:3.8.4-openjdk-17 AS builder
WORKDIR /app
COPY be/pom.xml .
COPY be/src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run Stage
FROM eclipse-temurin:17-jre-focal
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
