import { DATE_FORMATS } from 'common/enumerators';
import { format, FormatOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export type InputtedDate = string | number | Date;

export function formatDate(
  inputtedDate: InputtedDate,
  dateFormat: DATE_FORMATS,
) {
  const date =
    inputtedDate instanceof Date ? inputtedDate : new Date(inputtedDate);

  if (dateFormat === DATE_FORMATS.ISO_DATE) return date.toISOString();

  const options: FormatOptions = {
    locale: ptBR,
  };

  return format(date, dateFormat, options);
}
