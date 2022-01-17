# Server Calculator

## Step to run

- `git clone {git-repo-url}`
- `docker-compose up` or `docker compose up` for latest docker versions

- POST request to http://localhost:9000/api/calculate with the below payload

  Payload

```json
{
  "serverType": { "CPU": 2, "RAM": 32, "HDD": 100 },
  "virtualMachines": [
    { "CPU": 1, "RAM": 16, "HDD": 10 },
    { "CPU": 1, "RAM": 16, "HDD": 10 },
    { "CPU": 2, "RAM": 32, "HDD": 100 }
  ]
}
```

## Requirement

- Docker
