# Deploy to Google Cloud Run

This guide explains how to deploy your portfolio to Google Cloud Run.

## Prerequisites

1.  **Google Cloud SDK**: Ensure `gcloud` CLI is installed and configured.
2.  **Project**: Create a Google Cloud Project.

## Steps

### 1. Enable Services

Enable the necessary APIs:

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
```

### 2. Configure Project

Set your project ID:

```bash
gcloud config set project YOUR_PROJECT_ID
```

*(Replace `YOUR_PROJECT_ID` with your actual project ID)*

### 3. Deploy from Source

The simplest way is to let Cloud Run build your container automatically from the source code.

Run this command in the root of your project:

```bash
gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated
```

-   `portfolio`: The name of your service.
-   `--source .`: Tells Cloud Run to build the current directory (using the Dockerfile).
-   `--region us-central1`: You can change this to a region closer to you (e.g., `asia-south1` for Mumbai).
-   `--allow-unauthenticated`: Makes the site public.

### 4. Verify

After the command completes, it will output a URL (e.g., `https://portfolio-xyz-uc.a.run.app`). Open this URL to see your live site.

## Alternative: Build Locally & Push

If customization is needed, you can build locally and push to Artifact Registry:

1.  **Create Repository**:
    ```bash
    gcloud artifacts repositories create repo-name --repository-format=docker --location=us-central1
    ```
2.  **Build & Submit**:
    ```bash
    gcloud builds submit --tag us-central1-docker.pkg.dev/YOUR_PROJECT_ID/repo-name/portfolio .
    ```
3.  **Deploy**:
    ```bash
    gcloud run deploy portfolio --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/repo-name/portfolio --region us-central1 --allow-unauthenticated
    ```

## Competition Note

For the dev.to post, make sure to use the **Cloud Run Embed**:

`{% cloudrun <SERVICE_URL> %}`
