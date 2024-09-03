function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

function formatPrice(price: number): string {
  return '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export { formatPrice, getRandomColor }