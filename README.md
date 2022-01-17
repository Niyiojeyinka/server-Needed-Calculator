# Server Calculator

## Step to run

    1. `git clone {git-repo-url}`
    2. `docker-compose up` or `docker compose up` for lates docker versions
    POST request to http://localhost:9000/api/calculate with the below payload


    Payload

    ```json
    {

"serverType":{"CPU": 2, "RAM": 32, "HDD": 100},
"virtualMachines":[

{"CPU": 1, "RAM": 16, "HDD": 10},
{"CPU": 1, "RAM": 16, "HDD": 10},
{"CPU": 2, "RAM": 32, "HDD": 100}
]

}

    ```

## Requirement

- Docker
