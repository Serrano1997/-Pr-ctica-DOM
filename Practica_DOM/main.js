
const products = [
  {
    name: 'Martillo de Acero',
    price: 25,
    image: './Assets/Productos/martillohierro.webp',
    link: 'https://totherramienta.com/products/martillo-profesional-con-mango-de-fibra-2kg?_pos=3&_sid=78c1d8cab&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Destornillador',
    price: 10,
    image: './Assets/Productos/desantornillador.webp',
    link: 'https://totherramienta.com/products/juego-14-destornilladores-plano-estrella?_pos=2&_sid=1545f4d39&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Juego de Llaves',
    price: 30,
    image: './Assets/Productos/juegodellaves.webp',
    link: 'https://totherramienta.com/products/juego-llaves-combinadas-xxl-bgs-34-50mm?_pos=12&_sid=5734ce39a&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Sierra Circular',
    price: 18,
    image: './Assets/Productos/sierracircular.webp',
    link: 'https://totherramienta.com/products/sierra-electrica-circular-brushless?_pos=3&_sid=273c0b59f&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Taladro Perforador',
    price: 50,
    image: './Assets/Productos/taladroperforador.webp',
    link: 'https://totherramienta.com/products/taladro-percutor-2-velocidades-1?_pos=2&_sid=044306fde&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Alicates Terminales',
    price: 15,
    image: './Assets/Productos/Alicatesterminales.webp',
    link: 'https://totherramienta.com/products/alicates-terminales-no-aislados-8-3-4?_pos=1&_sid=db45c8d99&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Cinta Métrica',
    price: 8,
    image: './Assets/Productos/cintametrica.webp',
    link: 'https://totherramienta.com/products/jbm-53026-cinta-metrica-5m-x-25mm?_pos=2&_sid=54bc17e4b&_ss=r',
    seller: 'Herramienta MasterPro'
  },
  {
    name: 'Lijadora Eléctrica',
    price: 40,
    image: './Assets/Productos/lijadoraelectrica.avif',
    link: 'https://totherramienta.com/products/lijadora-rotativa-20v?_pos=3&_sid=71ac4b35a&_ss=r',
    seller: 'Herramienta MasterPro'
  }
];

function displayProducts(products) {
  const productContainer = document.querySelector('#productos');
  productContainer.innerHTML = ''; 

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('producto');

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <p><strong>Vendedor:</strong> ${product.seller}</p> 
      <a href="${product.link}" class="btn">Ver más</a>
    `;

    productContainer.appendChild(productElement);
  });
}
function searchProducts(query) {
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(filteredProducts);
}
function sortProducts(criteria) {
  let sortedProducts = [...products];
  
  switch (criteria) {
    case 'precio-asc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'precio-desc':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'nombre-asc':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'nombre-desc':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  displayProducts(sortedProducts);
}
document.querySelector('#busqueda').addEventListener('input', (e) => {
  searchProducts(e.target.value);
});

document.querySelector('#orden').addEventListener('change', (e) => {
  sortProducts(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products);
});
