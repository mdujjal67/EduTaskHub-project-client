import FeaturesCard from "./FeaturesCard";
import PropTypes from "prop-types"

const FeaturesSection = ({featuresData}) => {
    
    return (
        <div id="features_Section">
            <h1 className="text-4xl font-bold text-center mb-8">Our Features</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-[80px] lg:mb-[100px]">
            {featuresData.map((feature, index) => (
                <FeaturesCard key={index} feature={feature} />
            ))}
        </div>
        </div>
    );
};
FeaturesSection.propTypes = {
    featuresData: PropTypes.object
};
export default FeaturesSection;