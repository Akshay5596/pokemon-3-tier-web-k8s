# FullStack App
## Specifications
- Docker Engine

### Note
- Update React and Springboot codes with Docker Host machine IP address to access application

## Launch PostgreSQL Database
- Build PostgreSQL Image
```
cd postgresql
docker image build -t <repository>:<tag> . [--no-cache]
```
- Launch PostgreSQL Container
```
docker container run -d --name postgresql -e POSTGRES_DB=xxxxx -e POSTGRES_USER=xxxxx -e POSTGRES_PASSWORD=xxxxx p5432:5432 <repository>:<tag>
```


## Setup springboot application
- Build Springboot Image
```
cd springboot
docker image build -t <repository>:<tag> . [--no-cache]
```
- Launch container from above build image
```
docker container run -d --name springboot -p8080:8080 <repository>:<tag>
```

## Setup React application
- Build React Image
```
cd react
docker image build -t <repository>:<tag> . [--no-cache]
```
- Launch container from above build image
```
docker container run -d --name reactapp -p8090:80 <repository>:<tag>
```

###########################
install kubeseal 

https://foxutech.medium.com/bitnami-sealed-secrets-kubernetes-secret-management-86c746ef0a79

################
cerate seal secret 
1. get pem certificate.pem
$ kubectl get secret -n kube-system -o yaml | grep tls.crt | awk '{print $2}' | base64 -d > my-new-pub-cert.pem

2. cerate seal secret   make shure namespce correct

$kubectl create secret generic my-secret --dry-run=client --from-literal=postgres-username=javaimage --from-literal=postgres-dbname=fullstackjava --from-literal=postgres-password=test123 -o yaml | kubeseal --cert my-new-pub-cert.pem -o yaml > my-sealed-secret.yaml


