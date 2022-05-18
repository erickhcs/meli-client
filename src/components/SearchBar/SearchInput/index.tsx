import * as S from './styles'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchInput = () => {
    return (
        <>
            <S.Input
                type="text"
                aria-label="Digite o que você quer encontrar"
                placeholder="Buscar produtos, marcas e muito mais…"
                maxLength={120} />
            <S.Button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} width={16} height={16} />
            </S.Button>
        </>
    )
};
