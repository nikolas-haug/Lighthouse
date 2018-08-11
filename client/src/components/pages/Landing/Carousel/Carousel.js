import React, { Component } from 'react';
import './Carousel.css';
import stonePic from '../../../../Images/stones-pic.png';
import lighthouse from '../../../../Images/lighthouse-pic.jpg';
import hands from '../../../../Images/hands.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: lighthouse,
    altText: 'LightHouse',
    captionHeader: 'LightHouse',
    caption: 'A beacon for those struggling with mental health'
  },
  {
    src: hands,
    altText: 'Community',
    captionHeader: 'Community',
    caption: 'Find resources througout the community for help and support'
  },
  {
    src: stonePic,
    altText: 'Peace of Mind',
    captionHeader: 'Peace of Mind',
    caption: "Don't wait. You don't have to fight this alone"
  }
];

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem className="carousel-item"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.captionHeader} captionHeader={item.captionHeader} />
          <CarouselCaption captionText={item.caption} caption={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel 
        className="carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Slides;