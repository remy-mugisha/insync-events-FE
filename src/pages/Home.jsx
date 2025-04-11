import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import './home.css';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  // Sample data - in a real app this would come from your context or API
  const [eventsData, setEventsData] = useState([]);
  const [speakersData, setSpeakersData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [advertData, setAdvertData] = useState([]);
  const [sponsorsData, setSponsorsData] = useState([]);
  const backendUrl = 'https://api.example.com/';
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Filter for upcoming events
  const upcomingEvents = eventsData?.filter((event) => new Date(event.date) > new Date());

  // Load dummy data for demonstration
  useEffect(() => {
    // Simulated API data loading
    setEventsData([
      {
        _id: '1',
        name: 'Great Lakes Economic Forum 2025',
        date: '2025-06-15T14:00:00',
        location: 'Toronto, Canada',
        category: { name: 'Conference' },
        imageUrl: '/images/mainhall.jpg',
        pricing: [
          { type: 'Standard', price: 1500 },
          { type: 'VIP', price: 2500 }
        ]
      },
      {
        _id: '2',
        name: 'Sustainability Summit',
        date: '2025-05-20T10:00:00',
        location: 'Chicago, USA',
        category: { name: 'Summit' },
        imageUrl: '/images/mainhall.jpg',
        pricing: [
          { type: 'Early Bird', price: 1000 },
          { type: 'Regular', price: 1800 }
        ]
      }
    ]);
    
    setSpeakersData([
      {
        _id: '1',
        name: 'Jane Smith',
        expertise: 'Environmental Policy',
        bio: 'Leading expert in Great Lakes environmental policy with over 15 years of experience.',
        image: '/images/mainhall.jpg'
      },
      {
        _id: '2',
        name: 'John Doe',
        expertise: 'Economic Development',
        bio: 'Economic advisor specializing in regional development strategies across the Great Lakes region.',
        image: '/images/mainhall.jpg'
      },
      {
        _id: '3',
        name: 'Emily Johnson',
        expertise: 'Maritime Trade',
        bio: 'Expert in international maritime law and Great Lakes shipping regulations.',
        image: '/images/mainhall.jpg'
      }
    ]);
    
    setNewsData([
      {
        _id: '1',
        title: 'New Trade Agreement Signed',
        author: 'Michael Williams',
        date: '2025-03-10T09:00:00',
        content: 'A landmark trade agreement was signed today between Great Lakes states and provinces, promising to boost regional economic activity.',
        image: '/images/mainhall.jpg'
      },
      {
        _id: '2',
        title: 'Sustainability Initiative Launched',
        author: 'Sarah Chen',
        date: '2025-02-28T14:30:00',
        content: 'A new initiative aimed at promoting sustainable practices across Great Lakes industries was announced yesterday.',
        image: '/images/mainhall.jpg'
      },
      {
        _id: '3',
        title: 'Tourism Boost Expected',
        author: 'Robert Jones',
        date: '2025-03-05T11:15:00',
        content: 'Tourism experts predict a significant increase in visitors to the Great Lakes region this summer following new promotion campaigns.',
        image: '/images/mainhall.jpg'
      }
    ]);
    
    setAdvertData([
      {
        _id: '1',
        title: 'Join the Great Lakes Economic Forum',
        description: 'Be part of shaping the economic future of the Great Lakes region',
        image: '/images/mainhall.jpg',
        link: '/register'
      },
      {
        _id: '2',
        title: 'Sustainable Development Conference',
        description: 'Connecting leaders to build a greener future for the Great Lakes',
        image: '/images/mainhall.jpg',
        link: '/events/sustainable-dev'
      }
    ]);
    
    setSponsorsData([
      {
        _id: '1',
        name: 'EcoTech Industries',
        logo: '/images/mainhall.jpg'
      },
      {
        _id: '2',
        name: 'Great Lakes Shipping Co',
        logo: '/images/mainhall.jpg'
      },
      {
        _id: '3',
        name: 'Regional Development Bank',
        logo: '/images/mainhall.jpg'
      }
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your backend
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  // Utility function to calculate countdown
  function countdownToDate(targetDate) {
    const target = new Date(targetDate);
    const now = new Date();
    const difference = target - now;

    if (difference <= 0) {
      return "00:00:00:00";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

    return `${days}:${hours}:${minutes}:${seconds}`;
  }

  // Format date function
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="hero-swiper"
        >
          {advertData?.map((advert) => (
            <SwiperSlide key={advert._id}>
              <div className="hero-slide" style={{ backgroundImage: `url(${advert.image})` }}>
                <div className="hero-content">
                  <h1>{advert.title}</h1>
                  <p>{advert.description}</p>
                  <a href={advert.link} className="hero-button">Login</a> 
                  <a href={advert.link} className="hero-button">Sign up</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Events Section */}
      <section className="section">
        <div className="section-header">
          <h2>Events & Summits</h2>
          <p>Explore key gatherings that bring together leaders, innovators, and policymakers to shape the future of the Great Lakes economy.</p>
        </div>

        <div className="subsection">
          <div className="subsection-header">
            <h3>Upcoming <span className="highlight">Event</span></h3>
            <p>Join us for thrilling events! Live music, workshops, art exhibits, and more! Mark your calendars and don't miss out!</p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="event-swiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 }
            }}
          >
            {upcomingEvents?.map((event) => (
              <SwiperSlide key={event._id}>
                <EventCard 
                  event={event} 
                  countdownToDate={countdownToDate} 
                  formatDate={formatDate} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="view-all">
            <Link to="/events" className="view-all-link">
              All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="section">
        <div className="subsection-header">
          <h3>Best Speakers <span className="highlight">and</span> Artist</h3>
          <p>Join us for thrilling events! Live music, workshops, art exhibits, and more! Mark your calendars and don't miss out!</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="speakers-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {speakersData?.map((speaker) => (
            <SwiperSlide key={speaker._id}>
              <div className="card speaker-card">
                <div className="card-image">
                  <img src={speaker.image} alt={speaker.name} />
                </div>
                <div className="card-content">
                  <h4>Name: {speaker.name}</h4>
                  <h4>Expert in {speaker.expertise}</h4>
                  <h5>Biography:</h5>
                  <p>{speaker.bio}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="view-all">
          <Link to="/speakers" className="view-all-link">
            All Speakers →
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="section">
        <div className="subsection-header">
          <h3>LATEST <span className="highlight">NEWS</span></h3>
          <p>Stay informed with the latest updates and stories from across the Great Lakes region.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="news-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {newsData?.map((news) => (
            <SwiperSlide key={news._id}>
              <div className="card news-card">
                <div className="card-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="card-content">
                  <p><strong>Author:</strong> {news.author}</p>
                  <p><strong>Date:</strong> {formatDate(news.date)}</p>
                  <p>{news.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="view-all">
          <Link to="/news" className="view-all-link">
            News & Blogs →
          </Link>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section">
        <div className="subsection-header">
          <h3>OUR <span className="highlight">SPONSORS</span></h3>
          <p>We appreciate the support of our sponsors who make these events possible.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
          loop
          className="sponsors-swiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {sponsorsData?.map((sponsor) => (
            <SwiperSlide key={sponsor._id}>
              <div className="sponsor-item">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="view-all">
          <Link to="/sponsors" className="view-all-link">
            All Sponsors →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <h2>More Features</h2>
        <div className="features-buttons">
          <Link to="/calendar" className="feature-button">My Calendar</Link>
          <Link to="/recommendations" className="feature-button">Recommendations</Link>
          <Link to="/profile" className="feature-button">My Profile</Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

// EventCard Component
function EventCard({ event, countdownToDate, formatDate }) {
  const [countdown, setCountdown] = useState(countdownToDate(event?.date));

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdown = countdownToDate(event.date);
      setCountdown(newCountdown);
      if (newCountdown === "00:00:00:00") {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return (
    <div className="card event-card">
      <div className="card-image">
        <img src={event.imageUrl} alt={event.name} />
      </div>
      <div className="card-content">
        <h4>{event.name}</h4>
        
        <div className="event-category">
          <span>{event.category.name}</span>
        </div>
        
        <div className="event-details">
          <div className="event-detail">
            <span className="icon calendar-icon"></span>
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="event-detail">
            <Clock className="icon clock-icon" />
            <span className="countdown">{countdown}</span>
          </div>
          
          <div className="event-detail">
            <span className="icon location-icon"></span>
            <span>{event.location}</span>
          </div>
        </div>
        
        <div className="event-pricing">
          <h5>Prices</h5>
          <div className="pricing-options">
            {event.pricing?.map((price, index) => (
              <div key={index} className="price-tag">
                {price.type}: Rwf {price.price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;