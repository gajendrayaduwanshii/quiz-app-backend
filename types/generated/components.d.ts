import type { Schema, Struct } from '@strapi/strapi';

export interface EducationsEducations extends Struct.ComponentSchema {
  collectionName: 'components_educations_educations';
  info: {
    displayName: 'educations';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    grade: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    passingYear: Schema.Attribute.String;
  };
}

export interface QuestionsQuestions extends Struct.ComponentSchema {
  collectionName: 'components_questions_questions';
  info: {
    displayName: 'Questions';
  };
  attributes: {
    Answer: Schema.Attribute.String;
    Options: Schema.Attribute.JSON;
    Question: Schema.Attribute.String;
  };
}

export interface SharedOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    option: Schema.Attribute.String;
  };
}

export interface SharedQuestions extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'Questions';
  };
  attributes: {
    answer: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.option', true>;
    question: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['Beginner', 'Intermediate', 'Expert']>;
    skillName: Schema.Attribute.String;
    yearsExperience: Schema.Attribute.String;
  };
}

export interface WorkExperienceWorkExperience extends Struct.ComponentSchema {
  collectionName: 'components_work_experience_work_experiences';
  info: {
    displayName: 'workExperience';
  };
  attributes: {};
}

export interface WorkExperiencesWorkExperiences extends Struct.ComponentSchema {
  collectionName: 'components_work_experiences_work_experiences';
  info: {
    displayName: 'workExperiences';
  };
  attributes: {
    company: Schema.Attribute.String;
    current: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    endDate: Schema.Attribute.Date;
    jobDescription: Schema.Attribute.Text;
    jobTitle: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'educations.educations': EducationsEducations;
      'questions.questions': QuestionsQuestions;
      'shared.option': SharedOption;
      'shared.questions': SharedQuestions;
      'skills.skills': SkillsSkills;
      'work-experience.work-experience': WorkExperienceWorkExperience;
      'work-experiences.work-experiences': WorkExperiencesWorkExperiences;
    }
  }
}
