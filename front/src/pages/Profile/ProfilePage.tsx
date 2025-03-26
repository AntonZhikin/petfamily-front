import { useAuth } from "../../contexts/auth/useAuth";

export function ProfilePage() {
	const { user } = useAuth();
	return <div></div>;
}
