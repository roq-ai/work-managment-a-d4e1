import * as yup from 'yup';

export const timeEntryValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  description: yup.string().nullable(),
  ticket_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
