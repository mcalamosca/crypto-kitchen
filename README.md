# 🍳 Crypto Kitchen

A monorepo for React applications supporting the Crypto Kitchen community - a Discord community for trading tokens on the Solana blockchain.

![Crypto Kitchen Banner](https://via.placeholder.com/1200x300/0A0A0A/3B82F6?text=Crypto+Kitchen)

## 📚 What's Inside

This monorepo is built with [Nx](https://nx.dev), a powerful build system for monorepos that helps you maintain, test, and build multiple projects within a single repository.

### Applications

- **momentum-dashboard**: A React dashboard for tracking token momentum and market trends on Solana
  - Real-time token price monitoring
  - Market sentiment analysis
  - Trading volume visualization
  - Token velocity metrics
  - Customizable alerts for price movements
  - Integration with Solana's high-speed blockchain

### Libraries

- **shared/ui**: Reusable UI components with a consistent design system
  - Button components with various styles
  - Data visualization components
  - Form elements
  - Layout containers

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ ([download](https://nodejs.org/en))
- npm or yarn (we recommend using npm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/crypto-kitchen.git
cd crypto-kitchen
```

2. Install dependencies:
```bash
npm install
```

3. Start the momentum dashboard:
```bash
npx nx serve momentum-dashboard
```

## 🛠️ Development Workflow

### Running Applications

```bash
# Start the momentum dashboard
npx nx serve momentum-dashboard
```

### Running Tests

```bash
# Test the momentum dashboard
npx nx test momentum-dashboard

# Test the shared UI library
npx nx test ui
```

### Creating New Components

```bash
# Create a new component in the shared UI library
npx nx g @nx/react:component MyComponent --project=ui --directory=components --export
```

### Creating New Applications

```bash
# Create a new React application
npx nx g @nx/react:app my-new-app
```

## 📦 Project Structure

```
crypto-kitchen/
├── apps/
│   ├── momentum-dashboard/       # Main dashboard application
│   └── momentum-dashboard-e2e/   # End-to-end tests for the dashboard
├── libs/
│   └── shared/
│       └── ui/                   # Shared UI components
├── tools/                        # Build and configuration tools
├── nx.json                       # Nx configuration
└── package.json                  # Workspace dependencies
```

## 🧩 Shared UI Components

The shared UI library contains reusable components that maintain a consistent look and feel across all applications:

- **Button**: Customizable button component with various styles and sizes
  - Primary, secondary, and outline variants
  - Small, medium, and large size options
  - Support for disabled state
  - Custom styling via className prop

## 🔄 Workflow

1. **Development**: Work on features in your local environment
2. **Testing**: Run tests to ensure code quality
3. **Building**: Build applications for production
4. **Deployment**: Deploy applications to your hosting provider

## 🌐 About Crypto Kitchen Community

Crypto Kitchen is a Discord community focused on trading tokens on the Solana blockchain. Our applications help community members track market trends, analyze token performance, and make informed trading decisions.

### Why Solana?

Solana offers significant advantages for crypto traders:

- **Speed**: Processes over 2,400 transactions per second
- **Low Fees**: Average transaction cost of just $0.00026
- **Scalability**: Designed to handle millions of transactions
- **Ecosystem Growth**: Fastest growing ecosystem for new builders
- **DeFi Dominance**: 81% of all DEX transactions occur on Solana

### Planned Features

Our momentum-dashboard will leverage Solana's unique capabilities:

- Integration with Solana's proof-of-history (PoH) for accurate time-based analysis
- Support for SPL tokens (Solana's token standard)
- Real-time transaction monitoring
- Integration with popular Solana DEXes
- Support for Solana Actions and Blinks for seamless transactions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Nx Documentation](https://nx.dev/getting-started/intro)
- [React Documentation](https://reactjs.org/)
- [Solana Documentation](https://docs.solana.com/)
- [Solana Developer Resources](https://solana.com/developers)
- [Solana DeFi Ecosystem](https://solana.com/ecosystem/defi) 