export const personalData = {
  // Thông tin cá nhân cơ bản
  basicInfo: {
    name: 'Nguyễn Hồng Đức',
    title: 'Web Developer & Creative Coder',
    initials: 'NHD',
    email: 'hongducct23@gmail.com | ducnh23@iart.group',
    phone: '+84 79 9076 901',
    location: 'Hà Nội, Việt Nam',
    birthday: '23/12/2003',
    zodiac: 'Ma Ket',
    profession: 'Web Developer',
    hobbies: 'Coding, Đọc sách, Du lịch, Đàn hát',
  },

  // Mô tả và giới thiệu
  descriptions: {
    hero: 'Tôi tạo ra những trải nghiệm web đẹp mắt và hiệu quả, biến ý tưởng thành hiện thực với code sạch và thiết kế tinh tế.',
    about:
      'Xin chào! Tôi là một Web Developer với niềm đam mê tạo ra những sản phẩm web chất lượng cao. Với hơn 1 năm kinh nghiệm trong ngành, tôi đã có cơ hội làm việc với nhiều dự án đa dạng, từ website doanh nghiệp đến các ứng dụng web phức tạp.',
    about2:
      'Tôi luôn tìm kiếm những thử thách mới và cơ hội để học hỏi các công nghệ hiện đại. Mục tiêu của tôi là tạo ra những sản phẩm không chỉ đẹp mắt mà còn mang lại trải nghiệm người dùng tốt nhất.',
    philosophy:
      '"Code sạch là code dễ đọc, dễ bảo trì và dễ mở rộng. Tôi tin rằng mỗi dòng code đều nên có mục đích rõ ràng và mang lại giá trị thực sự cho người dùng."',
    contact:
      'Tôi luôn sẵn sàng lắng nghe các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác. Hãy liên hệ với tôi!',
    footer: 'Web Developer đam mê tạo ra những sản phẩm web đẹp mắt và hiệu quả.',
  },

  // Dự án
  projects: [
    {
      id: 1,
      title: 'Booking Tour Website',
      description:
        'Website booking tour với giao diện trực quan, hỗ trợ lịch trình tour, đặt tour, xem thông tin khách sạn, xem vé máy bay, thanh toán và quản lý đơn hàng, AI Chatbot.',
      image:
        'https://images.unsplash.com/photo-1758598497143-84a0cfdc9958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjA5NTE5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: [
        'VueJS',
        'Laravel',
        'MySQL',
        'Tailwind CSS',
        'Google Map API',
        'VNPAY API',
        'Google Auth API',
        'SendGrid API',
      ],
      link: 'https://bookingtour.hongducct.id.vn',
      github: 'https://github.com/hongducct/tour_booking_vue',
    },
    {
      id: 2,
      title: 'Family Tree Management Website',
      description:
        'Website quản lý gia phả với tính năng quản lý thành viên, quan hệ gia phả, lịch sử gia phả, và các tính năng khác.',
      image:
        'https://res.cloudinary.com/dlhra4ihw/image/upload/v1761798823/blank-family-tree-template_tz1va3.png',
      tags: ['VueJS', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Vuetify', 'OpenAI API'],
      link: 'https://familytree.hongducct.id.vn',
      github: 'https://github.com/hongducct/family_tree',
    },
    {
      id: 3,
      title: 'DLuLu Notes Web App',
      description:
        'Ứng dụng ghi chú với tính năng quản lý ghi chú, tạo ghi chú, xem ghi chú, và các tính năng khác.',
      image:
        'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDg2NTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['VueJS', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Vuetify', 'OpenAI API'],
      link: 'https://dlulu.hongducct.id.vn',
      github: 'https://github.com/hongducct/dlulu-noteapp-vue',
    },
    {
      id: 4,
      title: 'E-Commerce Watch Website',
      description:
        'Website thương mại điện tử với tính năng quản lý sản phẩm, giỏ hàng, thanh toán và quản lý đơn hàng.',
      image: 'https://res.cloudinary.com/dlhra4ihw/image/upload/v1761798918/watch_c90ta1.webp',
      tags: ['VueJS', 'Laravel', 'MySQL', 'Tailwind CSS', 'SEPAY API', 'SendGrid API'],
      link: '#',
      github: 'https://github.com/hongducct/watch-eCommerce-using-laravel-vuejs',
    },
    {
      id: 5,
      title: 'Product Management App Mobile',
      description:
        'Ứng dụng quản lý sản phẩm với giao diện trực quan, hỗ trợ quản lý sản phẩm, người dùng',
      image:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwODU1ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Tailwind CSS', 'Expo', 'MySQL', 'REST API'],
      link: '#',
      github: 'https://github.com/hongducct/MOCAN',
    },
  ],

  // Kỹ năng
  skills: [
    {
      title: 'Frontend',
      icon: 'mdi-code-tags',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Expo'],
    },
    {
      title: 'Backend',
      icon: 'mdi-database',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'REST API'],
    },
    {
      title: 'Design',
      icon: 'mdi-palette',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping'],
    },
    {
      title: 'Tools & Others',
      icon: 'mdi-lightning-bolt',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Testing', 'n8n'],
    },
  ],

  // Social links
  socialLinks: [
    {
      name: 'GitHub',
      icon: 'mdi-github',
      url: 'https://github.com/hongducct',
      color: 'gray-300',
    },
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      url: 'https://linkedin.com/in/hongducct',
      color: 'gray-300',
    },
    {
      name: 'Email',
      icon: 'mdi-email',
      url: 'mailto:hongducct23@gmail.com',
      color: 'gray-300',
    },
  ],

  // Navigation links
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
}
