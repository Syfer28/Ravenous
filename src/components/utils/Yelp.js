const keyAPI = 'FJwmc7HbkCzIQs7lUXnitHfjLMc244s3T3bDJCYuhSF-eBzlrroKZs1dbY0SvVAWCvEZVCHLZdFQ1q_sZXEsqo2Q7D-u6b24v2u0pKkVwQT-2X_ZFDZ7qnNbL9OtZXYx';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`
    }
};
  
const Yelp = () => {
  return fetch('https://api.yelp.com/v3/businesses/search?location=prague&sort_by=best_match&limit=20', options)
    .then(response => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id, 
          imageSrc: business.image_url, 
          name: business.name, 
          address: business.location.address1, 
          city: business.location.city, 
          state: business.location.state, 
          zipcode: business.location.zip_code, 
          category: business.categories[0].title, 
          rating: business.rating, 
          reviewCount: business.review_count
        }))
      }
    })
    .catch(err => console.error(err));
}

export default Yelp;