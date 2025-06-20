import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const showItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items/view');
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <button style={{ marginBottom: 20 }} onClick={showItems}>View Items</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {items.map((item) => (
          <div
            key={item._id}
            onClick={() => handleClick(item)}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              cursor: "pointer",
              width: 200,
            }}
          >
            <img
              src={item.CoverImage}
              alt={item.name}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>

    
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Item Details"
        style={{
          content: {
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      >
        {selectedItem && (
          <div>
            <h2>{selectedItem.name}</h2>
            <p><strong>Type:</strong> {selectedItem.type}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>

            <Carousel showThumbs={true} dynamicHeight={false}>
              <div>
                <img src={selectedItem.CoverImage} alt="Cover" />
              </div>
              {selectedItem.additionalImages?.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Image ${i}`} />
                </div>
              ))}
            </Carousel>

            <button
              onClick={() => alert("Enquiry sent!")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Enquire
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ViewItems;
