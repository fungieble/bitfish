import { PropsWithChildren, createContext } from 'react';

interface Provider {
	foo: 'bar';
}

const BitfishContext = createContext<Provider | undefined>(undefined);

export function BitfishConfig({ children }: PropsWithChildren<{}>) {
	return (
		<BitfishContext.Provider value={{ foo: 'bar' }}>
			{children}
		</BitfishContext.Provider>
	);
}
