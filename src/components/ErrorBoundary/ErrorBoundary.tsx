import { Error } from "./Error";
import React from "react";

type ErrorBoundaryProps = {
  hasError: Boolean;
};

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryProps
> {
  constructor(
    props:
      | { children: React.ReactNode }
      | Readonly<{ children: React.ReactNode }>
  ) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    const setHasError = (value: boolean) => {
      this.setState({ hasError: value });
    };

    if (this.state.hasError) {
      return <Error setHasError={setHasError} />;
    }

    return this.props.children;
  }
}
