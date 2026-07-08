// ===== SCROLL HEADER =====
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== DADOS DOS TOURS =====
// TOURS_DATA_START
const tours = {
    "farellones": {
        "titulo": "Farellones",
        "emoji": "⛷️",
        "desc": "O Parque Farellones não é apenas uma estação de esqui; é o maior centro de entretenimento na neve do Chile. Localizado a apenas 36 km de Santiago, é o destino perfeito para famílias, casais e grupos de amigos que buscam aventura e as melhores vistas da Cordilheira dos Andes.",
        "incluso": [
            "Saída às 06:00h rumo a Farellones",
            "Transporte de ida e volta de Santiago",
            "Guia em português",
            "Parada para café da manhã",
            "Parada em rental para aluguel de roupa de neve e equipamentos"
        ],
        "naoincluso": [
            "Alimentação",
            "Aluguel de roupas de neve/equipamentos",
            "Tickets de acesso ao Parque Farellones"
        ],
        "nota": "Kit de neve (luvas, óculos, macacão e botas) à parte, no rental: aprox. R$ 148 (adulto) / R$ 205 (infantil).",
        "preco": "R$ 255,00 por pessoa",
        "foto": "assets/img002.jpg",
        "video": null
    },
    "vallenevado": {
        "titulo": "Valle Nevado",
        "emoji": "🏔️",
        "foto": "assets/img003.jpg",
        "desc": "A melhor opção para conhecer e curtir a Cordilheira dos Andes. Explore a Cordilheira em um tour emocionante pelo Valle Nevado, com vistas deslumbrantes e paradas estratégicas ideais para fotos inesquecíveis.",
        "incluso": [
            "Saída às 06:00h rumo a Valle Nevado",
            "Transporte de ida e volta de Santiago",
            "Guia em português",
            "Parada para café da manhã",
            "Parada em rental para aluguel de roupa de neve e equipamentos"
        ],
        "naoincluso": [
            "Alimentação",
            "Aluguel de roupas de neve/equipamentos",
            "Tickets de acesso ao centro de ski"
        ],
        "nota": "Kit de neve (luvas, óculos, macacão e botas) à parte, no rental: aprox. R$ 148 (adulto) / R$ 205 (infantil).",
        "preco": "R$ 255,00 por pessoa",
        "video": null
    },
    "panoramico": {
        "titulo": "Andes Panorâmico",
        "emoji": "🌄",
        "desc": "Vislumbre a Cordilheira dos Andes! Esse passeio tem como foco a experiência pela Cordilheira, com paradas de vistas panorâmicas e contato com a neve, passando por Valle Nevado, Farellones e El Colorado.",
        "incluso": [
            "Saída às 06:00h rumo à Cordilheira",
            "Passagem por Valle Nevado, Farellones e El Colorado",
            "Guia em português",
            "Parada para café da manhã",
            "Parada em rental para aluguel de roupa de neve e equipamentos"
        ],
        "naoincluso": [
            "Alimentação",
            "Aluguel de roupas de neve/equipamentos"
        ],
        "nota": "Kit de neve (luvas, óculos, macacão e botas) à parte, no rental: aprox. R$ 148 (adulto) / R$ 205 (infantil).",
        "preco": "R$ 240,00 por pessoa",
        "foto": "assets/img004.webp",
        "video": null
    },
    "sunset": {
        "titulo": "Valle Nevado Sunset",
        "emoji": "🌅",
        "desc": "Desfrute de um pôr do sol inesquecível no Valle Nevado! Esse passeio tem como foco a experiência pela Cordilheira dos Andes, com paradas de vistas panorâmicas e contato com a neve. Disponível no verão.",
        "incluso": [
            "Picnic exclusivo com snacks, vinhos e sucos",
            "Guia em português",
            "Parada para café da manhã",
            "Parada em rental para aluguel de roupa de neve e equipamentos"
        ],
        "naoincluso": [
            "Alimentação",
            "Aluguel de roupas de neve/equipamentos"
        ],
        "nota": "Passeio disponível apenas no verão. Kit de neve à parte: aprox. R$ 148 (adulto) / R$ 205 (infantil).",
        "preco": "R$ 300,00 por pessoa",
        "foto": "assets/img005.png",
        "video": null
    },
    "elcolorado": {
        "titulo": "El Colorado Full Day",
        "emoji": "❄️",
        "desc": "Venha viver a magia na neve! Curta um dia completo em El Colorado, com paisagens incríveis e estrutura ideal para esquiar ou simplesmente aproveitar a montanha. Pistas indicadas para principiantes.",
        "incluso": [
            "Dia completo em El Colorado",
            "Guia em português",
            "Parada para café da manhã",
            "Parada em rental para aluguel de roupa de neve e equipamentos"
        ],
        "naoincluso": [
            "Alimentação",
            "Aluguel de roupas de neve/equipamentos",
            "Tickets para as pistas de ski"
        ],
        "nota": "Kit de neve (luvas, óculos, macacão e botas) à parte, no rental: aprox. R$ 148 (adulto) / R$ 205 (infantil).",
        "preco": "R$ 250,00 por pessoa",
        "foto": "assets/img006.jpg",
        "video": null
    },
    "citycaminando": {
        "titulo": "City Tour Caminando",
        "emoji": "🚶",
        "desc": "Conheça com detalhes e riqueza de informações os pontos mais históricos de Santiago, caminhando com um guia em português.",
        "incluso": [
            "Plaza de Armas",
            "Palácio de La Moneda",
            "Catedral Metropolitana",
            "Cerro Santa Lucía",
            "Cerro San Cristóbal",
            "Igreja de San Francisco",
            "Mercado Central",
            "Patio Bellavista",
            "Tour guiado com segurança, em português"
        ],
        "preco": "R$ 150,00 por pessoa",
        "foto": "assets/img007.png",
        "video": null
    },
    "cityvan": {
        "titulo": "City Tour em Van",
        "emoji": "🚐",
        "desc": "O melhor dos pontos históricos de Santiago com conforto e praticidade, em van particular com guia em português.",
        "incluso": [
            "Plaza de Armas",
            "Palácio de La Moneda",
            "Catedral Metropolitana",
            "Cerro Santa Lucía",
            "Cerro San Cristóbal",
            "Igreja de San Francisco",
            "Mercado Central",
            "Patio Bellavista",
            "Tour guiado com segurança, em português"
        ],
        "preco": "R$ 200,00 por pessoa",
        "foto": "assets/img008.jpg",
        "video": null
    },
    "cityfunicular": {
        "titulo": "City Tour + Funicular",
        "emoji": "🚡",
        "desc": "City tour premium com tickets incluídos! Caminharemos pelo Centro Histórico de Santiago visitando o Palácio de La Moneda, a Plaza de Armas e o bairro Bellavista, com parada em loja de artesanato chileno (lápis-lazúli). Depois, subiremos ao Cerro San Cristóbal de teleférico e funicular para uma vista panorâmica de toda Santiago, com degustação de mote com huesillo e empanada típica chilena no topo.",
        "incluso": [
            "Transporte",
            "Motorista/guia em português",
            "Parada em loja de artesanato chileno",
            "Ingresso para o funicular e o teleférico",
            "Empanada típica chilena",
            "Bebida típica (mote com huesillo)"
        ],
        "nota": "Duração: 4 horas. Saídas às 09h30 e 14h30, de terça-feira a domingo.",
        "preco": "R$ 380,00 por pessoa",
        "foto": "assets/img009.jpg",
        "video": null
    },
    "conchatoro": {
        "titulo": "Concha y Toro — Centro del Vino",
        "emoji": "🍷",
        "desc": "Visite essa vinícola centenária, fundada por Melchor Concha y Toro e Emiliana Subercaseaux.",
        "incluso": [
            "Visita ao parque Concha y Toro e exteriores da casa Don Melchor",
            "Experiência sensorial Casillero del Diablo",
            "Adega subterrânea Casillero del Diablo",
            "Adega Guarda do Alto",
            "Mirante Concha y Toro",
            "Quatro taças de vinhos premium"
        ],
        "nota": "Duração de 5h a 6h de passeio, considerando a rota de ida e volta.",
        "preco": "R$ 415,00 por pessoa",
        "foto": "assets/img010.jpg",
        "video": null
    },
    "conchatoropropremium": {
        "titulo": "Concha y Toro Premium",
        "emoji": "🥂",
        "desc": "Vinícola lendária e premiada. Um passeio inesquecível pela Viña Concha y Toro, onde tradição e sabor se encontram em uma experiência única. Descubra seus vinhedos históricos, conheça as adegas e desfrute de uma degustação especial em um dos lugares mais icônicos do Chile.",
        "incluso": [
            "Tour pela vinícola",
            "Visita aos vinhedos históricos e às adegas",
            "Degustação especial"
        ],
        "nota": "Horários AM/PM disponíveis. Duração média de 5 horas. Horário de saída a combinar.",
        "preco": "R$ 385,00 por pessoa",
        "foto": "assets/img011.jpg",
        "video": null
    },
    "conchamarques": {
        "titulo": "Concha y Toro Marqués",
        "emoji": "👑",
        "desc": "Tour exclusivo na Concha y Toro.",
        "incluso": [
            "Visita ao parque Concha y Toro e exterior da casa Don Melchor",
            "Experiência sensorial Casillero del Diablo",
            "Adega subterrânea Casillero del Diablo",
            "Adega Guarda do Alto",
            "Mirante Concha y Toro",
            "Quatro degustações de vinhos premium",
            "Seis degustações de vinhos Marqués de Casa Concha",
            "Uma tábua de queijos",
            "Uma taça de brinde"
        ],
        "nota": "Duração de 7h a 8h de passeio, considerando a rota de ida e volta.",
        "preco": "R$ 490,00 por pessoa",
        "foto": "assets/img012.jpg",
        "video": null
    },
    "undurraga": {
        "titulo": "Vinícola Undurraga",
        "emoji": "🌿",
        "desc": "Conheça essa incrível vinícola centenária! Experiência na Viña Undurraga, onde tradição e sabor se encontram em um passeio completo pelos vinhedos, jardins e adegas históricas. Uma vivência única com degustação de vinhos e contato com a cultura vitivinícola chilena.",
        "incluso": [
            "Tour pela vinícola",
            "Visita aos vinhedos, jardins e adegas históricas",
            "Degustação de vinhos"
        ],
        "nota": "Horários AM e PM disponíveis.",
        "preco": "R$ 320,00 por pessoa",
        "foto": "assets/img013.jpg",
        "video": null
    },
    "elyeso": {
        "titulo": "Embalse El Yeso",
        "emoji": "💧",
        "desc": "Descubra o Cajón del Maipo e o incrível Embalse El Yeso, com paisagens únicas e um dia perfeito em contato com a natureza.",
        "incluso": [
            "Túnel Tinoco (panorâmico)",
            "Mirante del Yeso",
            "Embalse El Yeso",
            "Parada em El Arriero",
            "Casa de Chocolate",
            "Piquenique no Cajón del Maipo / Plaza San José de Maipo com vista panorâmica"
        ],
        "preco": "R$ 315,00 por pessoa",
        "foto": "assets/img014.jpg",
        "video": null
    },
    "termas": {
        "titulo": "Termas de Colina",
        "emoji": "♨️",
        "desc": "Relaxe nas famosas Termas de Colina, fontes termais naturais a poucos quilômetros de Santiago. Perfeito para descansar após dias de passeio!",
        "incluso": [
            "Transporte de ida e volta",
            "Entrada nas termas",
            "Guia em português",
            "Tempo livre nas termas"
        ],
        "preco": "R$ 430,00 por pessoa",
        "foto": "assets/img015.jpg",
        "video": null
    },
    "embalse_termas": {
        "titulo": "Cajón del Maipo + Termas de Colina",
        "emoji": "🏞️",
        "desc": "Uma experiência única no Cajón del Maipo, com paisagens incríveis, ar puro e relaxamento nas termas. Ideal para quem quer fugir da rotina e se conectar com a natureza.",
        "incluso": [
            "Túnel Tinoco (panorâmico)",
            "Mirante do Vulcão San José",
            "Termas de Colina",
            "Mirante dos Ventos",
            "Casa de Chocolate",
            "Piquenique no Cajón del Maipo / Plaza San José de Maipo com vista panorâmica"
        ],
        "nota": "Saídas a partir das 05:00 em van turística. Duração média: 8 horas. Horário de saída a combinar.",
        "preco": "R$ 410,00 por pessoa",
        "foto": "assets/img016.webp",
        "video": null
    },
    "islanegra": {
        "titulo": "Isla Negra + Undurraga + San Alfonso",
        "emoji": "⚓",
        "desc": "Passeio incrível pelo Oceano Pacífico, pela maior piscina do mundo e por uma vinícola centenária! Explore três destinos imperdíveis em um só dia: a cultura e poesia na Casa Museo Pablo Neruda em Isla Negra, a experiência única de vinhos na Viña Undurraga e as vistas incríveis da maior piscina do mundo em San Alfonso del Mar.",
        "incluso": [
            "Isla Negra",
            "San Alfonso del Mar",
            "Viña Undurraga",
            "Transporte de ida e volta",
            "Guia em português"
        ],
        "naoincluso": [
            "Alimentação",
            "Entrada Casa Museo Pablo Neruda — Isla Negra (aprox. CLP $8.000 / R$ 50)"
        ],
        "nota": "Saída desde as 06:30h. Duração aproximada: 8 horas. Horário de saída a combinar.",
        "preco": "R$ 420,00 por pessoa",
        "foto": "assets/img017.webp",
        "video": null
    },
    "vina": {
        "titulo": "Viña del Mar e Valparaíso",
        "emoji": "🌊",
        "desc": "Cultura, mar e história em uma experiência inesquecível em Viña del Mar e Valparaíso.",
        "incluso": [
            "Río Tinto (café da manhã, adega e loja de vinhos)",
            "Relógio de Flores",
            "Casa de Pablo Neruda (La Sebastiana)",
            "Vista panorâmica — Morro Alegre / Escada Piano",
            "Congresso Nacional do Chile",
            "Plaza Sotomayor (Porto de Valparaíso)",
            "Muelle Barón",
            "Guia e almoço bilíngue"
        ],
        "nota": "Saída desde as 06:15h. Duração média: 9 horas.",
        "preco": "R$ 240,00 por pessoa",
        "foto": "assets/img018.avif",
        "video": null
    },
    "portillo": {
        "titulo": "Portillo",
        "emoji": "🎿",
        "desc": "Descubra a beleza de Portillo e da Laguna del Inca em uma experiência inesquecível entre montanhas e paisagens únicas.",
        "incluso": [
            "Parada para café da manhã",
            "Estrada dos Caracoles",
            "Monumento Chacabuco",
            "Salto del Soldado",
            "Centro de Esqui",
            "Laguna del Inca",
            "Picnic exclusivo com snacks, sucos e vinhos"
        ],
        "preco": "R$ 310,00 por pessoa",
        "foto": "assets/img019.jpg",
        "video": null
    },
    "safari": {
        "titulo": "Parque Safari",
        "emoji": "🦁",
        "desc": "Viva a emoção de ficar cara a cara com leões e tigres em uma experiência única e segura na América Latina. Ideal para famílias, com atividades como alimentar girafas e zebras ou explorar um safari jurássico.",
        "incluso": [
            "Transporte",
            "Ticket de entrada ao parque",
            "Entrada herbívoros",
            "Entrada felinos"
        ],
        "naoincluso": [
            "Alimentação dentro do parque"
        ],
        "nota": "Duração média: 10 horas. Horários de saída a combinar.",
        "preco": "R$ 385,00 por pessoa",
        "foto": "assets/img020.webp",
        "video": null
    },
    "alyan": {
        "titulo": "Alyan Sunset",
        "emoji": "🍷",
        "desc": "Se você quer apreciar um pôr do sol incrível, com vista para a vinícola e a Cordilheira dos Andes, degustando bons vinhos, esse passeio é para você!",
        "incluso": [
            "Transporte de ida e volta"
        ],
        "naoincluso": [
            "Ticket de entrada na vinícola (opcional, R$ 325,00 — também pode ser comprado direto no site da vinícola, com toda a assessoria da Vamo Viajar)"
        ],
        "nota": "O valor de R$ 220,00 é apenas do transporte. Quem comprar o ticket tem jantar exclusivo com degustação de vinhos e menu personalizado (inclusive vegetariano ou sem lactose).",
        "preco": "R$ 220,00 (transporte)",
        "foto": "assets/img021.jpg",
        "video": null
    },
    "monteluz": {
        "titulo": "Vinícola Monteluz Sunset",
        "emoji": "🌇",
        "desc": "Um pôr do sol de tirar o fôlego entre os vinhedos, com música ao vivo do DJ e a Cordilheira dos Andes de pano de fundo. Um tour exclusivo pensado para curtir o fim de tarde com estilo.",
        "incluso": [
            "Transfer de ida e volta",
            "Tour exclusivo na vinícola",
            "Sunset com DJ"
        ],
        "video": null,
        "preco": "R$ 530,00 por pessoa",
        "foto": "assets/img022.webp"
    },
    "sunsetinfinitum": {
        "titulo": "Sunset Infinitum 3K",
        "emoji": "🎧",
        "desc": "O pôr do sol mais esperado do inverno! Uma festa exclusiva com DJ no Valle Nevado, cercado de neve e paisagens incríveis da Cordilheira dos Andes.",
        "incluso": [
            "Transfer de ida e volta",
            "Parada para aluguel de roupa de neve",
            "Parada para almoço",
            "Sunset exclusivo com festa e DJ no Valle Nevado"
        ],
        "nota": "🎉 Oferta de lançamento válida durante o mês de julho!",
        "video": null,
        "preco": "R$ 580,00 por pessoa",
        "foto": "assets/img023.jpg"
    },
    "pubcrawl": {
        "titulo": "Festa Pub Crawl",
        "emoji": "🍻",
        "desc": "Let's go! Pub Crawl Chile — todas as sextas e sábados, aproveite o passeio mais divertido de bares e casas noturnas de Santiago. Uma experiência única onde você conhecerá pessoas do mundo inteiro enquanto aproveita a melhor vida noturna no coração de Bellavista.",
        "incluso": [
            "Ponto de encontro: Merced 88 Rooftop Bar, às 21h30",
            "1h30 de Open Bar (cerveja, vodka, rum, pisco)",
            "Tour pelas melhores casas noturnas de Bellavista",
            "Ingressos, acesso VIP e doses de boas-vindas em cada parada",
            "Promoções 2 por 1 a noite toda em bebidas selecionadas",
            "Guarda-volumes gratuito na boate mais moderna"
        ],
        "nota": "Todas as sextas e sábados. Ponto de encontro: Merced 88 Rooftop Bar.",
        "preco": "R$ 120,00 por pessoa",
        "foto": "assets/img024.png",
        "video": null
    }
};
// TOURS_DATA_END

// ===== FOTOS DE CLIENTES =====
// CLIENTES_DATA_START
const clientesFotos = {
    "1": "assets/img025.jpg",
    "2": "assets/img026.jpg",
    "3": "assets/img027.jpg",
    "4": "assets/img028.jpg",
    "5": "assets/img029.jpg",
    "6": "assets/img030.jpg",
    "7": "assets/img031.jpg",
    "8": "assets/img032.jpg",
    "9": "assets/img033.jpg",
    "10": "assets/img034.jpg",
    "11": "assets/img035.jpg",
    "12": "assets/img036.jpg",
    "13": "assets/img037.jpg",
    "14": "assets/img038.jpg",
    "15": "assets/img039.jpg",
    "16": "assets/img040.jpg",
    "17": "assets/img041.jpg",
    "18": "assets/img042.jpg",
    "19": "assets/img029.jpg",
    "20": "assets/img043.jpg"
};
// CLIENTES_DATA_END
const TOTAL_SLOTS_CLIENTES = 20;

// ===== ABRIR MODAL =====
let currentModalTourId = null;
function abrirModal(id) {
    const tour = tours[id];
    const overlay = document.getElementById('modalOverlay');
    currentModalTourId = id;

    document.getElementById('modalTitulo').textContent = tour.titulo;
    document.getElementById('modalDesc').textContent = tour.desc;
    document.getElementById('modalPreco').textContent = tour.preco;
    document.getElementById('modalImg').textContent = tour.emoji;

    const lista = document.getElementById('modalLista');
    lista.innerHTML = '';
    tour.incluso.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });

    // Não incluso (opcional)
    const naoInclusoBlock = document.getElementById('modalNaoInclusoBlock');
    const listaNaoIncluso = document.getElementById('modalListaNaoIncluso');
    listaNaoIncluso.innerHTML = '';
    if (tour.naoincluso && tour.naoincluso.length) {
        tour.naoincluso.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaNaoIncluso.appendChild(li);
        });
        naoInclusoBlock.style.display = 'block';
    } else {
        naoInclusoBlock.style.display = 'none';
    }

    // Nota extra (opcional)
    const notaEl = document.getElementById('modalNota');
    if (tour.nota) {
        notaEl.textContent = '💬 ' + tour.nota;
        notaEl.style.display = 'block';
    } else {
        notaEl.style.display = 'none';
    }

    // Vídeo (opcional) - toca automaticamente mudo (exigência dos navegadores);
    // o usuário pode ativar o som pelo botão.
    // Prioridade de exibição: vídeo > foto real > emoji placeholder
    const videoWrap = document.getElementById('modalVideoWrap');
    const videoEl = document.getElementById('modalVideo');
    const fotoPlaceholder = document.getElementById('modalImg');
    const fotoReal = document.getElementById('modalFoto');

    fotoReal.style.display = 'none';
    fotoPlaceholder.style.display = 'none';
    videoWrap.style.display = 'none';
    videoEl.pause();
    videoEl.removeAttribute('src');

    if (tour.video) {
        videoEl.src = tour.video;
        videoEl.muted = true;
        videoEl.play().catch(() => {});
        videoWrap.style.display = 'block';
    } else if (tour.foto) {
        fotoReal.src = tour.foto;
        fotoReal.alt = tour.titulo;
        fotoReal.style.display = 'block';
    } else {
        fotoPlaceholder.style.display = 'flex';
    }

    const wppNum = 'message/P2THDXHXEB5WH1';
    document.getElementById('modalWpp').href = `https://wa.me/${wppNum}?text=Olá! Tenho interesse no tour: ${tour.titulo}`;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== ATIVAR SOM DO VÍDEO =====
function ativarSomVideo() {
    const videoEl = document.getElementById('modalVideo');
    videoEl.muted = false;
    videoEl.play().catch(() => {});
}

// ===== FECHAR MODAL =====
function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    const videoEl = document.getElementById('modalVideo');
    videoEl.pause();
}

function fecharModalFora(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        fecharModal();
    }
}

// ===== CALCULADORA DE CÂMBIO =====
let taxaBRL_CLP = 171;

function buscarCotacao() {
    const hoje = new Date().toLocaleDateString('pt-BR');
    document.getElementById('taxaInfo').innerHTML =
        `📅 Cotação de hoje (${hoje}): <span>1 BRL = ${taxaBRL_CLP.toFixed(2)} CLP</span>`;
    converter('BRL');
}

function converter(origem) {
    if (!taxaBRL_CLP) return;
    if (origem === 'BRL') {
        const brl = parseFloat(document.getElementById('inputBRL').value) || 0;
        document.getElementById('inputCLP').value = Math.round(brl * taxaBRL_CLP);
    } else {
        const clp = parseFloat(document.getElementById('inputCLP').value) || 0;
        document.getElementById('inputBRL').value = (clp / taxaBRL_CLP).toFixed(2);
    }
}

buscarCotacao();

// ===== EDITOR DE FOTOS =====
// ===== GALERIA DE FOTOS DE CLIENTES =====

// Cria os 20 espaços da galeria e aplica as fotos já salvas
function inicializarClientesGrid() {
    const grid = document.getElementById('clientesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    for (let i = 1; i <= TOTAL_SLOTS_CLIENTES; i++) {
        if (!clientesFotos[i]) continue;
        const slot = document.createElement('div');
        slot.className = 'cliente-slot';
        slot.dataset.index = i;
        slot.onclick = () => abrirLightbox(i);
        grid.appendChild(slot);
        aplicarFotoCliente(i);
    }
}

// Atualiza visualmente um espaço da galeria com a foto salva
function aplicarFotoCliente(index) {
    const slot = document.querySelector(`.cliente-slot[data-index="${index}"]`);
    if (!slot) return;
    const foto = clientesFotos[index];
    if (!foto) return;

    slot.classList.add('tem-foto');
    slot.innerHTML = `
        <img class="cliente-foto" src="${foto}" alt="Foto de cliente ${index}">
        <div class="cliente-slot-overlay">
            <button class="cliente-slot-btn" title="Ampliar" onclick="event.stopPropagation(); abrirLightbox(${index})"><i class="fa-solid fa-expand"></i></button>
        </div>
    `;
}

// ===== LIGHTBOX (AMPLIAR FOTO DE CLIENTE) =====
let _lightboxIndexAtual = null;

function indicesComFoto() {
    const indices = [];
    for (let i = 1; i <= TOTAL_SLOTS_CLIENTES; i++) {
        if (clientesFotos[i]) indices.push(i);
    }
    return indices;
}

function abrirLightbox(index) {
    if (!clientesFotos[index]) return;
    _lightboxIndexAtual = index;
    atualizarLightbox();
    document.getElementById('lightboxOverlay').classList.add('active');
}

function atualizarLightbox() {
    const foto = clientesFotos[_lightboxIndexAtual];
    if (!foto) return;
    document.getElementById('lightboxImg').src = foto;
    const indices = indicesComFoto();
    const posicao = indices.indexOf(_lightboxIndexAtual) + 1;
    document.getElementById('lightboxContador').textContent = `${posicao} de ${indices.length}`;
}

function lightboxNavegar(delta) {
    const indices = indicesComFoto();
    if (indices.length === 0) return;
    const posAtual = indices.indexOf(_lightboxIndexAtual);
    const novaPos = (posAtual + delta + indices.length) % indices.length;
    _lightboxIndexAtual = indices[novaPos];
    atualizarLightbox();
}

function fecharLightbox() {
    document.getElementById('lightboxOverlay').classList.remove('active');
}

function fecharLightboxFora(event) {
    if (event.target.id === 'lightboxOverlay') fecharLightbox();
}

document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightboxOverlay').classList.contains('active')) return;
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowLeft') lightboxNavegar(-1);
    if (e.key === 'ArrowRight') lightboxNavegar(1);
});

// ===== FAQ (PERGUNTAS FREQUENTES) =====
function toggleFaq(perguntaEl) {
    const item = perguntaEl.closest('.faq-item');
    const respostaWrap = item.querySelector('.faq-resposta-wrap');
    const jaAtivo = item.classList.contains('active');

    if (jaAtivo) {
        item.classList.remove('active');
        respostaWrap.style.maxHeight = null;
    } else {
        item.classList.add('active');
        respostaWrap.style.maxHeight = respostaWrap.scrollHeight + 'px';
    }
}

inicializarClientesGrid();
