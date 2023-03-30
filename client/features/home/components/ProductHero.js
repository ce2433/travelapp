import * as React from 'react';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { useSelector } from 'react-redux';

// add your video paths here
const backgroundVideos = [
  '/assets/videos/home4.mp4',
  '/assets/videos/home7.mp4',
  '/assets/videos/video3.mp4',
];

const rdmIdx = Math.floor(Math.random() * backgroundVideos.length);
const displayVideo = backgroundVideos[rdmIdx];

// const displayPic =
//   'https://justinkelefas.com/wp-content/uploads/2022/04/New-York-City-Sunset-sample-2.jpg';

export default function ProductHero() {
  const user = useSelector((state) => state.auth.user);

  return (
    <ProductHeroLayout
      sxBackground={{
        // backgroundImage: `url(${displayPic})`,
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {!user ? (
        <>
          {/* <img
            style={{ display: 'none' }}
            src={displayPic}
            alt='increase priority'
          /> */}
          <video
            src={displayVideo}
            alt='increase priority'
            autoPlay
            muted
            loop
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <Typography color='inherit' align='center' variant='h2'>
            Your Personal Travel Concierge
          </Typography>
          <Typography
            color='inherit'
            align='center'
            variant='h5'
            sx={{ mb: 10, mt: { xs: 2, sm: 4 } }}
          >
            Experience your next destination with personalized itineraries
            crafted by local experts.
          </Typography>
          <Button
            color='secondary'
            variant='contained'
            size='large'
            component='a'
            href={`/destinations`}
            sx={{ minWidth: 250, fontSize: '3rem' }}
          >
            Explore
          </Button>
        </>
      ) : (
        <>
          {/* <img
            style={{ display: 'none' }}
            src={displayPic}
            alt='increase priority'
          /> */}
          <video
            src={displayVideo}
            alt='increase priority'
            autoPlay
            muted
            loop
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <Typography
            color='inherit'
            align='center'
            variant='h2'
            marked='center'
          >
            {`Your next destination awaits, ${user.firstName}`}
          </Typography>
          <Typography
            color='inherit'
            align='center'
            variant='h5'
            sx={{ mb: 10, mt: { xs: 2, sm: 4 } }}
          >
            Get your itinerary now and explore as the locals do.
          </Typography>
          <Button
            color='secondary'
            variant='contained'
            size='large'
            component='a'
            href={`/destinations`}
            sx={{ minWidth: 250, fontSize: '2rem' }}
          >
            Destinations
          </Button>
        </>
      )}
    </ProductHeroLayout>
  );
}
