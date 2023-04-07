import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, createContext } from 'react';

interface Provider {}

const BitfishContext = createContext<Provider | undefined>(undefined);
const queryClientContext = createContext<QueryClient | undefined>(undefined);

export function BitfishConfig({
	children,
	client,
}: PropsWithChildren<{ children: any; client: any }>) {
	return (
		<BitfishContext.Provider value={client}>
			<QueryClientProvider
				client={client.queryClient}
				context={queryClientContext}
			>
				{children}
			</QueryClientProvider>
		</BitfishContext.Provider>
	);
}
