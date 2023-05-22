const subButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const event_id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/event/${event_id}`, {
        method: 'POST',
    });

    if (response.ok) {
        document.location.replace(`/event/${event_id}`);
      } else {
        alert('Failed to subscribe to event');
      }
    }
};

document
.querySelector('.sub-event')
.addEventListener('click', subButtonHandler);
