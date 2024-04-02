import { useState } from "react";

export const useHeader = () => {

    const [isOpenMenuMovil, setIsOpenMenuMovil] = useState(false);

    // Permite cambiar el estado para determinar si el menú se encuentra abierto
    const onOpenMenuMovil = (isOpen: boolean) => {
        (isOpen) ? setIsOpenMenuMovil(false) : setIsOpenMenuMovil(true);
    }

    const setActiveNavLink = (isActive: boolean) =>
        (isActive) ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

    return {
        isOpenMenuMovil,
        onOpenMenuMovil,
        setActiveNavLink
    }
}