export type SignInPageProps = React.PropsWithChildren;

export function SignInPage(props: SignInPageProps) {
	return <div className="sign-in-page">{props.children}</div>;
}
