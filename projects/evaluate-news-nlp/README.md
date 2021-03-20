# Evaluate a news article with Natural Language Processing

This project allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.


## Install

Th  project found in  [GitHup](https://github.com/bmeabeed/fend/tree/refresh-2019)

- Fork the the repo
- Clone the project to your local machin 'Chose repository foler in your local machine to clone the project'

`git https://github.com/{Your GitHup account}/fend.git`

- checkout the barnch **refresh-2019**

`git checkout refresh-2019`

- `cd` into your new folder and run:
  `npm install` to install project dependancies tree


## Getting started

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/login). Signing up will get you an API key. 

### Step 2: Environment Variables
Open index.js in the server folder and replace the value of **MPI_KEY** by yours key

`MAPI_KEY={Your API Key}`

### Step 3: Build your project

   `npm run build-prod`

### Step 4: Run your project

   `npm run start` 


  ### Step 4: Open your browser to use the project
  After running this command `npm run start` you can access the project using your browser    http://localhost:8080

- Enter avalid url in the **url** field
- Click on **NLP Evaluate** button to evaluate the selected url
- The return josn opject will renderd in the NLP Results section






