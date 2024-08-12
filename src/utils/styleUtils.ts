export const spreadConfig = <T extends Record<string, any>>(
  attr: string,
  map: T
) =>
  Object.entries(map).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: {
          [attr]: value,
        },
      };
    },
    {} as Record<keyof T, Record<string, any>>
  );
