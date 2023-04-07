import { QueryClient } from '@tanstack/react-query';
import { createCoreClient } from './create-core-client';

export function createClient({ queryClient = new QueryClient() }) {
	const client = createCoreClient();

	return Object.assign(client, { queryClient });
}
