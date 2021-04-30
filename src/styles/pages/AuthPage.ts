import styled from "styled-components"

import { linearGradient, backgroundImages } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: linear-gradient(162.44deg, #8257E5 0%, #6F48C9 100%); */
  /* background: linear-gradient(162.44deg, #8257E5 0%, #6F48C9 100%) url("icons/backgroundLogo.svg") no-repeat right top fixed; */
  /* ${linearGradient({
    colorStops: ['#8257E5 0%', '#6F48C9 100%'],
    toDirection: '162.44deg'
  })} */

  ${backgroundImages(
    'url("/icons/backgroundLogo.svg")',
    'linear-gradient(162.44deg, #8257E5 0%, #6F48C9 100%)'
    // 'no-repeat'
    )
  }

  background-repeat: none;

  > img {
    margin: 5rem 0 0 2.8rem;
  }
`
