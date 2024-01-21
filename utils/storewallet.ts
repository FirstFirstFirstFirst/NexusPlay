// walletStore.js
import create from 'zustand';


const useWalletStore = create(((set) => ({
    wallet: {
        address: '',
        balances: 0,
        isLogin: false,
    },
    setWallet: (newWallet: {
        address: string,
        balances: number,
        isLogin: boolean,
    }) => set({ wallet: newWallet }),
    updateBalance: (newBalance: any) => set((state: any) => ({ wallet: { ...state.wallet, balances: newBalance } })),
    login: () => set((state: any) => ({ wallet: { ...state.wallet, isLogin: true } })),
    logout: () => set((state: any) => ({ wallet: { ...state.wallet, isLogin: false } })),
})));

export default useWalletStore;
