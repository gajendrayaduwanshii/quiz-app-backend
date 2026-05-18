# SkillSync AI Backend Documentation

This is the Strapi backend for SkillSync AI. It stores user profiles, uploaded resumes, quiz results, departments, technologies, and blog content.

## Tech Stack

- Strapi 5.18.1
- `@strapi/plugin-users-permissions`
- `@strapi/plugin-cloud`
- `better-sqlite3`
- Local SQLite database by default

## Getting Started

Install dependencies and start Strapi in development mode:

```bash
npm install
npm run develop
```

The backend runs at:

```text
http://localhost:1337
```

Open the admin panel and create the first admin user if this is a fresh setup.

## Environment Setup

Create `backend/.env` from `backend/.env.example` and replace placeholder secrets.

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=toBeModified1,toBeModified2
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
ENCRYPTION_KEY=tobemodified
```

SQLite is used by default:

```bash
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

## Content Types

### Userlist

Collection: `userlists`

Stores application users and their profile data.

Main fields:

- `name`
- `email`
- `phoneNumber`
- `dob`
- `password`
- `gender`
- `currentJobTitle`
- `currentCompany`
- `yearsExperience`
- `desiredJobType`
- `certifications`
- `uploadResume`
- repeatable `educations`
- repeatable `workExperiences`
- repeatable `skills`
- repeatable `quizResult`

### Department

Collection: `departments`

Stores department/category data and has a one-to-many relation with technologies.

Main fields:

- `name`
- `title`
- `departmentImage`
- `description`
- `technologies`

### Technology

Collection: `technologies`

Stores technology information and optional static questions.

Main fields:

- `technologyName`
- `image`
- `description`
- `questions`
- `department`

### Blog

Collection: `blogs`

Stores blog entries.

Main fields:

- `Title`
- `Description`
- `BlogContent`
- `BlogImage`
- `slug`

## Components

| Component | Purpose |
| --- | --- |
| `skills.skills` | User skills with level and years of experience |
| `educations.educations` | Education entries |
| `work-experiences.work-experiences` | Work history entries |
| `quiz-result.quiz-result` | Quiz result records |
| `quiz-question.quiz-question` | Stored quiz question attempts |
| `shared.questions` | Technology question with options and answer |
| `shared.option` | Question option |

## Frontend Integration

The frontend expects Strapi at:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

If endpoints are protected, create a Strapi API token and add it to the frontend environment:

```bash
STRAPI_API_TOKEN=your_strapi_api_token
```

The frontend needs permission to:

- Read `userlists`
- Create `userlists`
- Update `userlists`
- Upload files
- Read uploaded media

## Useful Commands

```bash
npm run develop
npm run start
npm run build
npm run console
npm run strapi
```

## Notes

- Uploaded resumes are stored through Strapi's media upload system.
- Quiz results are saved inside the user's repeatable `quizResult` component.
- Passwords are currently stored in the custom `userlists` content type. This is POC-level only and should be replaced with proper authentication before production.
- See `../PROJECT_DOCUMENTATION.md` for complete project documentation.
