#
# Build stage
#
FROM maven:3.6.0-jdk-11-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace
COPY src /workspace/src
RUN mvn -f pom.xml clean package

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /workspace/target/*.jar chat.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","chat.jar"]
