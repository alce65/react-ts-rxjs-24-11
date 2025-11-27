export const getDataOfForm = <T extends Record<string, string | boolean>>(
    form: HTMLFormElement | FormData,
    data: T
): T => {
    const keys = Object.keys(data);
    const result: Record<string, string | boolean> = {};
    keys.forEach((key) => {
        if (form instanceof HTMLFormElement) {
            const element = form.elements.namedItem(key) as HTMLInputElement;
            // Si el elemento es un checkbox, se obtiene el valor del atributo checked
            result[key] =
                 element.type === 'checkbox'
                    ? element.checked
                    : element.value;
        } else {
            const value = form.get(key) as string | boolean;
            // Si el elemento es un checkbox, se convierte el valor on en boolean
            result[key] =
                typeof data[key] === 'boolean' ? value === 'on' : value;
        }
    });
    return result as T;
};
