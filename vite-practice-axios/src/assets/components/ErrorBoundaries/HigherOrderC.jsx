import { Component } from "react";

export default class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haserror: false,
            error: undefined,
        };
    }
    static getDerivedStateFromError(error) {
        return { haserror: true, error: error };
    }
    componentDidCatch(error) {
        console.log(error);
    }
    render() {
        if (this.state.haserror) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}
