import Image from 'next/image'
import Logo from '../../../public/logo__small.png'
import { SearchInput } from './SearchInput'

import * as S from "./styles"

export const SearchBar = () => {

    return (
        <S.Container>
            <Image
                src={Logo}
                alt="Mercado Livre logo"
                width={39}
                height={28}
            />
            <SearchInput />
      </S.Container>
    )
}
