import unittest

from src.tmap_routes import _parse_tmap_feature_collection


class TMapRouteParsingTest(unittest.TestCase):
    def test_parse_pedestrian_feature_collection(self):
        sample = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {"type": "Point", "coordinates": [126.9236485, 37.5567742]},
                    "properties": {
                        "totalDistance": 1057,
                        "totalTime": 837,
                        "description": "28m 이동",
                        "turnType": 200,
                        "pointType": "SP",
                    },
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [126.9236485, 37.5567742],
                            [126.9238818, 37.5569409],
                        ],
                    },
                    "properties": {"distance": 28, "time": 37, "roadType": 24, "name": ""},
                },
                {
                    "type": "Feature",
                    "geometry": {"type": "Point", "coordinates": [126.9243846, 37.5530052]},
                    "properties": {
                        "description": "하나은행 서교동지점에서 좌측 횡단보도 후 보행자도로를 따라 20m 이동",
                        "turnType": 212,
                        "pointType": "GP",
                    },
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [126.9243846, 37.5530052],
                            [126.9243291, 37.5527830],
                        ],
                    },
                    "properties": {"distance": 20, "time": 13, "roadType": 21, "name": "보행자도로"},
                },
            ],
        }

        route = _parse_tmap_feature_collection(
            sample,
            search_option="30",
            label="계단 제외 우선",
            pregnancy_week=30,
        )

        self.assertEqual(route["distance"], 1057)
        self.assertEqual(route["duration"], 837)
        self.assertEqual(route["path"][0], [126.9236485, 37.5567742])
        self.assertEqual(route["metrics"]["crosswalkCount"], 1)
        self.assertTrue(route["metrics"]["stairsExcluded"])
        self.assertGreaterEqual(route["comfortScore"], 0)
        self.assertLessEqual(route["comfortScore"], 100)
        self.assertIn("v1 추정값", route["warnings"][0])


if __name__ == "__main__":
    unittest.main()
