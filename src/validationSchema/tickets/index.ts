import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  priority: yup.string().required(),
  project_id: yup.string().nullable().required(),
  creator_id: yup.string().nullable().required(),
  assignee_id: yup.string().nullable().required(),
});
