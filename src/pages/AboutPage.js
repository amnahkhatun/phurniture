import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className="page section section-center">
    <img src={aboutImg} alt="desk"></img>
    <article>
      <div>
        <h2>Our story</h2>
        <div className="underline"></div>
      </div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui sed urna eleifend, vitae venenatis nisi consequat. Sed eleifend, ipsum sed gravida aliquam, massa est luctus tellus, nec sollicitudin mauris nisl vel turpis. Cras suscipit, ante non finibus tincidunt, ante magna egestas justo, nec iaculis massa purus eget velit. Etiam in dui ut nisl ullamcorper semper vel ornare neque. Sed ornare elit at tellus interdum aliquam. Maecenas tempor ante et orci vulputate tempus. Donec suscipit rutrum ipsum, non lobortis orci venenatis ac. Sed efficitur ac neque ut mattis. Donec eu turpis non elit venenatis tempus. Fusce vitae ex nec lacus bibendum commodo. Quisque tristique, orci sit amet sodales ornare, diam tortor vehicula ligula, a vulputate sapien dolor vel leo. Etiam sed ipsum a lectus interdum facilisis ut quis lorem. Nulla dignissim nunc quis feugiat volutpat. Etiam eros ipsum, tincidunt facilisis maximus id, finibus quis diam.
      </p>
    </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
