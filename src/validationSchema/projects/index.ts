import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
  manager_id: yup.string().nullable().required(),
});
