//01
import ClearDay from './collection/01/clearDay'
import ClearNight from './collection/01/clearNight01n'
//02
import Cloudy1Day from './collection/02/cloudyDay-1-02d';
import Cloudy1Night from './collection/02/cloudyNight-1-02n';
//03
import Cloudy2Day from './collection/03/cloudyDay-2-03d';
import Cloudy2Night from './collection/03/cloudyNight-2';
//04
import Cloudy3Day from './collection/04/cloudy3Day';
import Cloudy3Night from './collection/04/cloudy3Night'
//09
import Rainy2Day from './collection/09/rainy2Day';
import Rainy4Night from './collection/09/rainy4night';
//10
import Rainy1Day from './collection/10/rainy1day';
import Rainy7Night from './collection/10/rainy7night';
//11
import Thunder from './collection/11/thunder';
//13
import Snowy3Day from './collection/13/snowy3day';
import Snowy6Night from './collection/13/snowy6night'
//50
import Cloudy from './collection/50/cloudy'

const iconComponents = {
    '01d': ClearDay,
    '01n': ClearNight,
    '02d': Cloudy1Day,
    '02n': Cloudy1Night,
    '03d': Cloudy2Day,
    '03n': Cloudy2Night,
    '04d': Cloudy3Day,
    '04n': Cloudy3Night,
    '09d': Rainy2Day,
    '09n': Rainy4Night,
    '10d': Rainy1Day,
    '10n': Rainy7Night,
    '11d': Thunder,
    '11n': Thunder,
    '13d': Snowy3Day,
    '13n': Snowy6Night,
    '50d': Cloudy,
    '50n': Cloudy,
}

export default iconComponents

//link to index item for access to icons

// Icon list
// Day icon	Night icon	Description
// 01d.png 	01n.png 	clear sky
// 02d.png 	02n.png 	few clouds
// 03d.png 	03n.png 	scattered clouds
// 04d.png 	04n.png 	broken clouds
// 09d.png 	09n.png 	shower rain
// 10d.png 	10n.png 	rain
// 11d.png 	11n.png 	thunderstorm
// 13d.png 	13n.png 	snow
// 50d.png 	50n.png 	mist


// 02d: cloudy-day-1 02n: cloudy-night-1
// 03d: cloudy-day-2 03n: cloudy-night-2
// 04d: cloudy-day-3 04n: cloudy-night-3
// 09d: rainy-2 09n: rainy-4
// 10d: rainy-1 10n: rainy-7
// 11d, 11n: thunder
// 13d: snowy-3 13n: snowy-6
