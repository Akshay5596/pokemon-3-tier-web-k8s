FROM openjdk:18-alpine
LABEL maintainer="akshay"
RUN apk add maven
COPY . /src
WORKDIR /src
RUN mvn clean install
EXPOSE 8080
CMD ["mvn", "spring-boot:run"] 
