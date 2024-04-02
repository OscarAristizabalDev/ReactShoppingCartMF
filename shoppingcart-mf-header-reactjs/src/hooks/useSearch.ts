import { useState } from "react";


export const useSearch = () => {

    const [valueSearchProduct, setValueSearchProduct] = useState('');

    // const onSubmitSearchProduct = ({ target }: FormEvent<HTMLFormElement>) => {
    //     setValueSearchProduct(((target as HTMLFormElement)[0] as HTMLInputElement).value);
    // }

    const onClickSearchProduct = (value: string) => {
        setValueSearchProduct(value);
    }

    return {
        valueSearchProduct,
        onClickSearchProduct,
    }

}
